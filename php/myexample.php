<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
	<title>MY PHP Example at AIktc</title>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width", initial scale=1.0>

</head>
<body>
	<?php 

	echo '<h1>WELCOME TO PHP</h1>';

	if($_POST)
	{
		$username=$_POST['username'];
		$brand=$_POST['brand'];
		echo "THANK YOU, $username YOU HAVE VOTED FOR $brand";
	}

	else
	{
		echo <<<_END
		<form method ="post" action="myexample.php">

		<br><label for="user">UserName:</label>
		<input type="text" name="username" id="username"/><br>
		<br><label>Please Vote for your Brand</label><br>

		<br><label><input type="radio" name="brand" value="NOKIA">NOKIA</label>
		<br><label><input type="radio" name="brand" value="SAMSUNG">SAMSUNG</label>
		<br><label><input type="radio" name="brand" value="APPLE">APPLE</label>
		<br><label><input type="radio" name="brand" value="VIVO">VIVO</label>
		<br><label><input type="radio" name="brand" value="OPPO">OPPO</label>

		<br><br><label><input type="submit" value="Vote"></label>

		</form>
_END;
	phpinfo();

	}

?>

</body>
</html>