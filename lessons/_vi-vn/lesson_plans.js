(function () {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.lessons = {
		1: {
			0: {
				startingText: 'Viết bằng Markdown không khó!',
				renderedAnswer: '<p>Viết bằng Markdown <em>không</em> khó!</p>',
			},
			1: {
				startingText: 'Tôi sẽ hoàn thành những bài học này!',
				renderedAnswer:
					'<p>Tôi <strong>sẽ</strong> hoàn thành những bài học này!</p>',
			},
			2: {
				startingText:
					'"Tất nhiên" cô thì thầm. Sau đó, cô hét lên: "Tất cả những gì tôi cần chỉ là một chút can đảm!"',
				renderedAnswer:
					'<p>"<em>Tất nhiên</em>," cô thì thầm. Sau đó, cô hét lên: "Tất cả những gì tôi cần chỉ là <strong>một chút can đảm</strong>!"</p>',
			},
			3: {
				startingText:
					'Nếu bạn nghĩ rằng điều này thật không thể tin được, thì có lẽ bạn đúng.',
				renderedAnswer:
					'<p>Nếu bạn nghĩ rằng <strong><em>điều này thật không thể tin được</em></strong>, thì có lẽ bạn đúng.</p>',
			},
		},
		2: {
			0: {
				startingText:
					'Tiêu đề một\nTiêu đề hai\nTiêu đề ba\nTiêu đề bốn\nTiêu đề năm\nTiêu đề sáu',
				renderedAnswer:
					'<h1>Tiêu đề một</h1>\n<h2>Tiêu đề hai</h2>\n<h3>Tiêu đề ba</h3>\n<h4>Tiêu đề bốn</h4>\n<h5>Tiêu đề năm</h5>\n<h6>Tiêu đề sáu</h6>',
			},
			1: {
				startingText:
					'Chủ nghĩa Tượng trưng Colombia trong Một Trăm Năm Cô Đơn\n\nVài nhận xét về cuốn sách Một Trăm Năm Cô Đơn.',
				renderedAnswer:
					'<h4>Chủ nghĩa Tượng trưng Colombia trong <em>Một Trăm Năm Cô Đơn</em></h4>\n<p>Vài nhận xét về cuốn sách <em>Một Trăm Năm...</em>.</p>',
			},
		},
		3: {
			0: {
				startingText: 'Tìm kiếm.()',
				renderedAnswer: '<p><a href="http://www.google.com">Tìm kiếm.</a></p>',
			},
			1: {
				startingText: 'Bạn thực sự, thực sự sẽ thích điều này!',
				renderedAnswer:
					'<p><a href="http://www.dailykitten.com">Bạn <strong>thực sự, thực sự</strong> sẽ thích điều này!</a></p>',
			},
			2: {
				startingText: 'Tin tức mới nhất từ trang BBC',
				renderedAnswer:
					'<h4>Tin tức mới nhất từ trang <a href="http://www.bbc.com/news">BBC</a></h4>',
			},
			3: {
				startingText:
					'Bạn có muốn [xem điều gì đó thú vị][]?\n\nVậy, tôi có [trang web dành cho bạn][một nơi thú vị khác]!',
				renderedAnswer:
					'<p>Bạn có muốn <a href="http://www.zombo.com">xem điều gì đó thú vị</a>?</p>\n<p>Vậy, tôi có <a href="http://www.stumbleupon.com">trang web dành cho bạn</a>!</p>',
			},
		},
		4: {
			0: {
				startingText:
					'[](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)',
				renderedAnswer:
					'<p><img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg" alt="Một con hổ đẹp"></p>',
			},
			1: {
				startingText:
					'[Black cat][]\n\n[Orange cat][Orange]\n\n[Black]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg',
				renderedAnswer:
					'<p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg" alt="Black cat"></p>\n<p><img src="http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png" alt="Orange cat"></p>',
			},
			1: {
				startingText:
					'[Mèo đen][]\n\n[Mèo Vàng][Vàng]\n\n[Đen]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg',
				renderedAnswer:
					'<p><img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg" alt="Mèo đen"></p>\n<p><img src="http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png" alt="Mèo Vàng"></p>',
			},
		},
		5: {
			0: {
				startingText:
					'Tôi đã đọc một câu trích dẫn thú vị vào hôm nọ:\n\n"Đôi mắt cô ấy đã gọi anh và tânh hồn anh đã vọt theo tiếng gọi. Để sống, để lầm lỗi, để ngã gục, để chiến thắng, để tái tạo cuộc sống từ chính cuộc sống!"',
				renderedAnswer:
					'<p>Tôi đã đọc một câu trích dẫn thú vị vào hôm nọ:</p>\n<blockquote>\n<p>"Đôi mắt cô ấy đã gọi anh và tâm hồn anh đã vọt theo tiếng gọi. Để sống, để lầm lỗi, để ngã gục, để chiến thắng, để tái tạo cuộc sống từ chính cuộc sống!"</p>\n</blockquote>',
			},
			1: {
				startingText:
					'\n>Ngày xửa ngày xưa, vào một thời điểm rất tốt đẹp, đã có một con bò con đi dọc con đường và con bò con này đi dọc con đường đã gặp một cậu bé nhỏ xinh tên là baby tuckoo...\n\nNgười cha đã kể câu chuyện đó cho cậu: ông nhìn cậu qua tấm kính: ông có một gương mặt đầy râu.\n\nCậu là baby tuckoo. Con bò con đi xuống con đường nơi Betty Byrne sống: cô ấy bán bánh chanh.',
				renderedAnswer:
					'<blockquote>\n<p>Ngày xửa ngày xưa, vào một thời điểm rất tốt đẹp, đã có một con bò con đi dọc con đường và con bò con này đi dọc con đường đã gặp một cậu bé nhỏ xinh tên là baby tuckoo...</p>\n<p>Người cha đã kể câu chuyện đó cho cậu: ông nhìn cậu qua tấm kính: ông có một gương mặt đầy râu.</p>\n<p>Cậu là baby tuckoo. Con bò con đi xuống con đường nơi Betty Byrne sống: cô ấy bán bánh chanh.</p>\n</blockquote>',
			},
			2: {
				startingText:
					"Anh nhanh chóng rời bỏ cô, lo sợ sự thân mật của cô có thể chuyển thành sự giễu cợt và mong muốn rời đi trước khi cô chào bán hàng của mình cho người khác, một du khách từ Anh hoặc một sinh viên của Trinity. Phố Grafton, nơi anh đi bộ, kéo dài giây phút nghèo khó chán chường. Ở lòng đường ở đầu phố, một tấm bia được dựng để tưởng nhớ Wolfe Tone và anh nhớ lại đã từng có mặt với cha mình khi đặt tấm bia. Anh nhớ lại với sự cay đắng cảnh lễ kỷ niệm giả tạo đó. Có bốn đại biểu Pháp trong một xe và một người, một chàng trai đầy đặn mỉm cười, giữ một tấm thẻ bị kẹp trên một cái que, trên đó được in những từ: VIVE L'IRLANDE!",
				renderedAnswer:
					"<blockquote>\n<p>Anh nhanh chóng rời bỏ cô, lo sợ sự thân mật của cô có thể chuyển thành sự giễu cợt và mong muốn rời đi trước khi cô chào bán hàng của mình cho người khác, một du khách từ Anh hoặc một sinh viên của Trinity. Phố Grafton, nơi anh đi bộ, kéo dài giây phút nghèo khó chán chường. Ở lòng đường ở đầu phố, một tấm bia được dựng để tưởng nhớ Wolfe Tone và anh nhớ lại đã từng có mặt với cha mình khi đặt tấm bia. Anh nhớ lại với sự cay đắng cảnh lễ kỷ niệm giả tạo đó. Có bốn đại biểu Pháp trong một xe và một người, một chàng trai đầy đặn mỉm cười, giữ một tấm thẻ bị kẹp trên một cái que, trên đó được in những từ: <em>VIVE L'IRLANDE</em>!</p>\n</blockquote>",
			},
		},
		6: {
			0: {
				startingText: 'Bột mì, Phô mai, Cà chua',
				renderedAnswer:
					'<ul>\n<li>Bột mì</li>\n<li>Phô mai</li>\n<li>Cà chua</li>\n</ul>',
			},
			1: {
				startingText: 'Cắt phô mai, Thái cà chua, Lăn cà chua trong bột',
				renderedAnswer:
					'<ol>\n<li>Cắt phô mai</li>\n<li>Thái cà chua</li>\n<li>Lăn cà chua trong bột</li>\n</ol>',
			},
			2: {
				startingText:
					'* Đỗ quyên (Ericaceae Rhododendron)\n* Cúc (Anthemideae Chrysanthemum)\n* Thược dược (Coreopsideae Dahlia)',
				renderedAnswer:
					'<ul>\n<li>Đỗ quyên (<em>Ericaceae Rhododendron</em>)</li>\n<li>Cúc (<em>Anthemideae Chrysanthemum</em>)</li>\n<li>Thược dược (<em>Coreopsideae Dahlia</em>)</li>\n</ul>',
			},
			3: {
				startingText:
					'* Calculus, Một giáo sư, Không có tóc, Thường mặc màu xanh lá\n* Castafiore, Ca sĩ opera, Có tóc trắng, Rất nổi tiếng',
				renderedAnswer:
					'<ul>\n<li>Calculus<ul>\n<li>Một giáo sư</li>\n<li>Không có tóc</li>\n<li>Thường mặc màu xanh lá</li>\n</ul>\n</li>\n<li>Castafiore<ul>\n<li>Ca sĩ opera</li>\n<li>Có tóc trắng</li>\n<li>Rất nổi tiếng</li>\n</ul>\n</li>\n</ul>',
			},
			4: {
				startingText:
					'1. Cắt phô mai\n  * Đảm bảo phô mai được cắt thành những miếng tam giác nhỏ.\n\n2. Thái cà chua\n  * Cẩn thận khi cầm dao.\n  * Để được hướng dẫn thêm về việc thái cà chua, hãy xem bài luận nổi tiếng của Thomas Jefferson về _Tom Ate Those_.',
				renderedAnswer:
					'<ol>\n<li><p>Cắt phô mai</p>\n<p>Đảm bảo phô mai được cắt thành những miếng tam giác nhỏ.</p>\n</li>\n<li><p>Thái cà chua</p>\n<p>Cẩn thận khi cầm dao.</p>\n<p>Để được hướng dẫn thêm về việc thái cà chua, hãy xem bài luận nổi tiếng của Thomas Jefferson về <em>Tom Ate Those</em>.</p>\n</li>\n</ol>',
			},
		},
		7: {
			0: {
				startingText:
					'We pictured the meek mild creatures where\nThey dwelt in their strawy pen,\nNor did it occur to one of us there\nTo doubt they were kneeling then.',
				renderedAnswer:
					'<p>We pictured the meek mild creatures where<br>They dwelt in their strawy pen,<br>Nor did it occur to one of us there<br>To doubt they were kneeling then.</p>',
			},
			1: {
				startingText:
					"1. Crack three eggs over a bowl.\n\n Now, you're going to want to crack the eggs in such a way that you don't make a mess.\n\n If you _do_ make a mess, use a towel to clean it up!\n\n2. Pour a gallon of milk into the bowl.\n\n Basically, take the same guidance as above: don't be messy, but if you are, clean it up!",
				renderedAnswer:
					"<ol>\n<li><p>Crack three eggs over a bowl.<br>Now, you're going to want to crack the eggs in such a way that you don't make a mess.<br>If you <em>do</em> make a mess, use a towel to clean it up!</p>\n</li>\n<li><p>Pour a gallon of milk into the bowl.<br>Basically, take the same guidance as above: don't be messy, but if you are, clean it up!</p>\n</li>\n</ol>",
			},
		},
	};
}).call(this);
