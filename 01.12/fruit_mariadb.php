<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>fruit 데이터베이스 자료 출력하기</title>
</head>
<body>

<?php
  //데이터베이스 계정 연결하기
  $conn = mysqli_connect('localhost','root','','goods');

  if(mysqli_connect_errno()) {
    printf("%s \n", mysqli_connect_error());
    exit;
  }
  //데이터베이스 fruit테이블 안에 5000원 이상인 자료만 조회하기
  $query = 'select * from fruits where price >= 5000';
  $result = mysqli_query($conn, $query); //변수에 결과값을 저장한다
  print "<table><tr>" . 
        "<th>Name</th>" .
        "<th>Price</th>" . 
        "<th>Color</th>" .
        "<th>Country</th></tr>";

  while( $row = mysqli_fetch_row($result) ) {
    print "<tr><td>" . $row[0] . "</td>" . 
            "<td>" . $row[1] . "</td>" . 
            "<td>" . $row[2] . "</td>" . 
            "<td>" . $row[3] . "</td></tr>";
  }
  print "</table>";

  mysqli_free_result($result);
  mysqli_close($conn);
?>
</body>
</html>

