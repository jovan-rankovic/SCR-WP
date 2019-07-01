<?xml version="1.0" encoding="UTF-8"?>
<xs:stylesheet version="1.0" xmlns:xs="http://www.w3.org/1999/XSL/Transform">
	<xs:template match="/">
		<html>
			<head>
			<title>SC Ranković | Mapa sajta</title>
			<link rel="shortcut icon" href="slike/scr.ico"/>
				<style type="text/css">
					h1{color:#000;}
					body{font-family:Calibri;color:black;}
					div{margin:30px auto;height:200px; width:1100px;}
					a{color:black;text-decoration:none;}
					a:hover{ color:#FF6A45;}
					thead tr{background-color:#8787b6;color:white;
							height: 40px;}
					th{padding-left:10px;}
				</style> 
				<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
				<script language="javascript">
					$(document).ready(function(){
						$("tbody tr:even").css("background-color","#C3C3CF");
						$("tbody tr:odd").css("background-color","#EEE");
					});
			</script>
			</head>
			<body><div>
			<h1><i>Mapa sajta</i></h1>
				<table width="1100px">
					<thead>
						<tr align="left">
							<th>Loc</th>
							<th>Lastmod</th>
							<th>Changefreq</th>
							<th>Priority</th>
						</tr>
					</thead>
					<tbody>
					<xs:for-each select="urlset/url">
						<tr align="left">
							<td>
								<xs:variable name="itemURL">
									<xs:value-of select="loc"/>
								</xs:variable>
								<a href="{$itemURL}">
									<xs:value-of select="loc"/>
								</a>
							</td>
							<td><xs:value-of select="lastmod"/></td>
							<td><xs:value-of select="changefreq"/></td>
							<td><xs:value-of select="priority"/></td>
						</tr>
					</xs:for-each>
					</tbody>
				</table>
			</div></body>
		</html>
	</xs:template>
</xs:stylesheet>