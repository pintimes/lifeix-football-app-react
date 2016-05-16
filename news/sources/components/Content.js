import React ,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
} from 'react-native';

var data = [
      {commentNum: 1,
       imgs:["http://photo.l99.com/common/ab0/1459301431104_xdzd42.jpg","http://photo.l99.com/bigger/522/1459265462135_kvxz39.jpg"],
       title: "中国足球"
      },
      {commentNum: 1,
       imgs:
         ["http://photo.l99.com/bigger/508/1463227216968_pgik85.jpg","http://photo.l99.com/common/2e/1427099521414_6ak5rg.jpg"],
       title: "中国足球"
      },
      {commentNum: 1,
       imgs:
        ["http://photo.l99.com/common/30/1394108924725_45gms8.jpg","http://photo.l99.com/common/31/1379550201457_1cb678.png"],
       title: "中国足球"
      },
      {commentNum: 1,
       imgs:
         ["http://photo.l99.com/common/31/1371533509639_p3h709.jpg","http://photo.l99.com/common/03/1380015225428_h7dz1t.png"],
       title: "123"
      },
      {commentNum: 1,
       imgs:
        ["http://photo.l99.com/common/23/1343755872868_t7fnd5.png","http://photo.l99.com/common/22/1353890154186_nr5m4g.gif"],
       title: "123"
      }
];

import ScrollImages from './ScrollImages';
//头部滚动菜单
class Content extends Component {
	render(){
		return (
			<ScrollImages data={data} />
		);
	}
}

module.exports = Content;