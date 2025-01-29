# create-topic.ps1

$apiUrl = "https://api.github.com/repos/alae-touba/software-engineering-notes/contents/"
try {
    $response = Invoke-WebRequest -Uri $apiUrl -UseBasicParsing
} catch {
    Write-Error "Failed to fetch data from GitHub API: $_"
    exit 1
}

$contents = $response.Content | ConvertFrom-Json
$directories = $contents | Where-Object { $_.type -eq 'dir' } | Select-Object -ExpandProperty name

foreach ($dir in $directories) {
    $template = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$dir Notes</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../topic-page-styles.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 id="mainTitle"></h1>
        </div>

        <input 
            type="text" 
            class="search-box" 
            placeholder="Search $dir notes..." 
            id="searchInput"
            autocomplete="off"
            aria-label="Search $dir documentation"
        >

        <div class="file-list" id="fileList"></div>

        <footer class="footer">
            <p>Maintained with &hearts; by Alae &bull; <a href="https://github.com/alae-touba" target="_blank">GitHub</a></p>
        </footer>
    </div>
    
    <script src="../topic-page.js"></script>
    <script>
        TopicManager.init({
            topicName: '$dir'
        });
    </script>

    <script src="../load-navigation.js"></script>
</body>
</html>
"@

    # Create topic directory
    $topicPath = Join-Path -Path $PWD.Path -ChildPath $dir
    if (-not (Test-Path $topicPath)) {
        New-Item -ItemType Directory -Path $topicPath | Out-Null
    }

    # Create index.html with UTF-8 encoding
    $indexPath = Join-Path -Path $topicPath -ChildPath "index.html"
    $template | Out-File -FilePath $indexPath -Encoding utf8

    Write-Host "✅ Created topic folder for '$dir' at:"
    Write-Host $topicPath
}