# create-topic.ps1
param(
    [Parameter(Mandatory=$true)]
    [string]$TopicName
)

$template = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${TopicName} Notes</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../topic-page-styles.css">
</head>
<body>
    <div class="header">
        <h1 id="mainTitle"></h1>
    </div>
    
    <input type="text" 
           class="search-box" 
           placeholder="Search ${TopicName} notes..." 
           id="searchInput"
           autocomplete="off"
           aria-label="Search ${TopicName} documentation">
    
    <div class="file-list" id="fileList"></div>

    <script src="../topic-page.js"></script>
    <script>
        TopicManager.init({
            topicName: '${TopicName}'
        });
    </script>

    <script src="../load-navigation.js"></script>
</body>
</html>
"@

# Create topic directory
$topicPath = Join-Path -Path $PWD.Path -ChildPath $TopicName
if (-not (Test-Path $topicPath)) {
    New-Item -ItemType Directory -Path $topicPath | Out-Null
}

# Create index.html
$indexPath = Join-Path -Path $topicPath -ChildPath "index.html"
$template | Out-File -FilePath $indexPath -Encoding utf8

Write-Host "✅ Created topic folder for '${TopicName}' at:"
Write-Host $topicPath