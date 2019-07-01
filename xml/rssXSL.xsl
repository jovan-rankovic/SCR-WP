<?xml version="1.0" encoding="UTF-8"?>
<xs:stylesheet version="1.0" xmlns:xs="http://www.w3.org/1999/XSL/Transform">
	<xs:template match="/">
		<html>
			<head>
			<title>RSS | SC Ranković</title>
            <link rel="shortcut icon" href="slike/scr.ico"/>
				<style type="text/css">
					h1{color:#000;}
					body{font-family:"Arial";color:black; }
					div{margin:30px auto;height:200px; width:1100px;}
					a{color:black;text-decoration:none;}
					a:hover{ color:#FF6A45;}
					th{padding-left:10px;}
					thead tr{background-color:#8787b6;color:white;}
				</style> 
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js" type="text/javascript"></script>
				<script language="javascript">
					$(document).ready(function(){
						$("tbody tr:even").css("background-color","#C3C3CF");
						$("tbody tr:odd").css("background-color","#EEE");
					});
			</script>
			</head>
			<body><div>
			<h1><i>RSS</i></h1>
				<table  height="100px" width="1100px">
					<thead>
						<tr  align="left">
							<th>Title</th>
							<th>Description</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
					<xs:for-each select="rss/channel/item">
						<tr align="left">
							<td><xs:value-of select="title"/></td>
							<td><xs:value-of select="description"/></td>
							<td>
								<xs:variable name="itemURL">
									<xs:value-of select="link"/>
								</xs:variable>
								<a href="{$itemURL}">
									<xs:value-of select="link"/>
								</a>
							</td>
						</tr>
					</xs:for-each>
				</tbody>
				</table>
			</div></body>
		</html>
	</xs:template>
</xs:stylesheet>