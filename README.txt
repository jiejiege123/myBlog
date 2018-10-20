## ����gulp���ǰ���Զ�������

**��������С����Ŀ�����ٹ���ǰ����Ŀ��ܡ�������Ӫ�ҳ�������࣬���ƶ�����Ŀ��Сdemo���Ե�**

## ��Ŀ����
```
// ��������
���������� npm run dev
���������� npm run build

// ����������
ִ��ѹ���� gulp zip
����ҳ�棺 gulp html
����ű��� gulp script
������ʽ�� gulp styles
�﷨��⣺ gulp eslint
ѹ��ͼƬ�� gulp images
```

## [��Ŀ��ַ](https://github.com/vincentSea/gulp-cli)
* ������а�����ϣ������Star ������������
```
git clone https://github.com/vincentSea/gulp-cli.git
```

## ��ĿĿ¼
```
������ README.md         # ��Ŀ˵��
������ config            # gulp·������
������ dist              # ���·��
|
������ gulpfile.js       # gulp�����ļ�
������ package.json      # ������
|
������ src               # ��Ŀ�ļ���
��?? ������ include       # ����ҳ������
��?? ������ index.html    # ��ҳ
��?? ������ static        # ��Դ�ļ���
��?? ��?? ������ images    # ͼ��
��?? ��?? ������ js        # �ű�
��?? ��?? ������ styles    # ��ʽ��scss, css��
��?? ������ views         # ҳ��
|
������ static            # �����dist��static�ļ���
������ webpack.config.js # webpack�����ļ�
```

## ��ĿԼ��
1�� ʹ���ϸ�� eslint �淶 [�ĵ�����](https://github.com/airbnb/javascript)
* �������ʹ��eslint������gulpfile�ļ���ȥ��������

2��ʹ��scssԤ����
* ���Ը��ݸ���ϲ�ã�ȥ���ò�ͬ��Ԥ������

3��static�ļ���
* һ��Ŀ¼��static�ļ��У����Դ�Ų���Ҫ������ļ����ݣ�����һЩ�����ͼƬ�������ļ���
* ÿ��npm run dev or build �����static�ļ����µ����ݣ������dist/static��


## ����ģʽ
* config/index.js�ļ�������

**��������**
``` javascript
 middleware: [
  proxy.proxyPrase(
    {
      target: 'http://v3.wufazhuce.com:8000/api',
      route: '/api'
    }
  )
]
```

## ʹ��Eslint 
config/index.js�ļ�
```
useEslint: false // �Ƿ�����eslint
```

## ʹ��webpack
* ����webpack���ܣ���������ѡ��

config/index.js�ļ�
```
useWebpack: false // �Ƿ�����webpack
```

## С����
* ��ǰ���Զ���������ܣ�ֻ��Ϊ�˼򵥷���

* �����������Լ���Ҫ��ȥ�����޸�����

* ������Ʋ�����ط����������������������ȡ

* [��Ŀ��ַ](https://github.com/vincentSea/gulp-cli) ������а�����ϣ������Star ������������


