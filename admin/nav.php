<nav class="navbar navbar-default">
    <div class="container-flid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">

            <a class="navbar-brand" href="#">管理中心</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li <?php if(strpos($_SERVER['PHP_SELF'],'index.php')!==false){echo ' class="active"';}?>><a href="index.php">首页 <span class="sr-only">(current)</span></a></li>
                <li <?php if(strpos($_SERVER['PHP_SELF'],'edit.php')!==false){echo ' class="active"';}?>><a href="edit.php">添加内容</a></li>
                <li <?php if(strpos($_SERVER['PHP_SELF'],'cat.php')!==false){echo ' class="active"';}?>><a href="cat.php">分类</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><?php echo $_SESSION['username'];?></a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">个人 <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="profile.php">修改密码</a></li>
                        <li><a href="profile.php?act=logout">退出</a></li>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>