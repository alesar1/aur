# Maintainer: fkxxyz <fkxxyz@163.com>

pkgname=rime-cloverpinyin
pkgver=1.1.3
pkgrel=1
#pkgdesc="Clover Simplified pinyin input for rime."
pkgdesc="✤四叶草简体拼音输入方案 for rime"
arch=('x86_64')
url="https://www.fkxxyz.com/d/cloverpinyin/"
license=('LGPL')
depends=('rime-prelude' 'rime-emoji' 'rime-symbols')
makedepends=('librime')
source=(https://github.com/fkxxyz/rime-cloverpinyin/releases/download/${pkgver}/clover.schema-${pkgver}.zip)
sha256sums=('08a4cbd479a03870f27bcb70742721b58a760cf647ba52cbfc5d6468c2ee3573')

build(){
  cd $srcdir
  rime_deployer --compile clover.schema.yaml . /usr/share/rime-data
}

package() {
  cd $srcdir
  rm build/*.txt
  rm -rf opencc
  install -Dm644 *.yaml -t "$pkgdir"/usr/share/rime-data/
  install -Dm644 build/* -t "$pkgdir"/usr/share/rime-data/build/
}
