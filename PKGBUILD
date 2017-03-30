pkgname=electrum-ltc
pkgver=2.8.3
_commit=432225d
pkgrel=1
pkgdesc='Lightweight Litecoin client'
arch=(any)
url=https://electrum-ltc.org/
license=(MIT)
depends=(python2-btchip
         python2-dnspython
         python2-ecdsa
         python2-jsonrpclib
         python2-ltc_scrypt
         python2-matplotlib
         python2-pbkdf2
         python2-protobuf
         python2-pyaes
         python2-pyqt4
         python2-pysocks
         python2-qrcode
         python2-requests
         zbar)
makedepends=(python2-pycurl)
source=($pkgname-$_commit.tar.gz::https://codeload.github.com/pooler/$pkgname/tar.gz/$_commit)
sha256sums=(bb8814d6302e233687723a7b7ddd29ef40335c18f07b8e0e77bf4e1949c70281)

prepare() {
  cd $pkgname-$_commit/

  find . -type f -exec sed -i '/^#!/ s/python$/&2/' {} +

  sed -i '/set_rbf/ s/True/False/
          s/rbf_combo = .*/& ;rbf_combo.setVisible(False)/
          s/rbf_label = .*/& ;rbf_label.setVisible(False)/' gui/qt/main_window.py
  sed -i 's/, rbf=False//
          s/, rbf//' lib/commands.py
}

build() {
  cd $pkgname-$_commit/

  pyrcc4 icons.qrc >gui/qt/icons_rc.py

  protoc --proto_path=lib/ --python_out=lib/ lib/paymentrequest.proto

  contrib/make_locale

  ./setup.py build
}

package() {
  cd $pkgname-$_commit/

  ./setup.py install --root=$pkgdir -O1

  mkdir -p $pkgdir/usr/share/doc/$pkgname/
  cp AUTHORS LICENCE README.rst RELEASE-NOTES electrum-ltc.conf.sample \
    $pkgdir/usr/share/doc/$pkgname/

  mkdir -p $pkgdir/usr/share/licenses/$pkgname/
  ln -rs $pkgdir/usr/share/doc/$pkgname/LICENCE $pkgdir/usr/share/licenses/$pkgname/
}
