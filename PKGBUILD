pkgname=electrum-ltc
pkgver=2.8.3.2
pkgrel=1
pkgdesc="Lightweight Litecoin client"
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
         python2-pycryptodomex
         python2-pyqt4
         python2-pysocks
         python2-qrcode
         python2-requests
         zbar)
makedepends=(gettext python2-pycurl)
source=(electrum-ltc-$pkgver.tar.gz::https://codeload.github.com/pooler/electrum-ltc/tar.gz/$pkgver)
sha256sums=(87861c1b46f37c2e3d025a8e0d55ed5fe44056d615d564146e6a3a210e857f8e)

prepare() {
  cd electrum-ltc-$pkgver/

  find ./ -type f -exec sed -i '/#!/s/python$/&2/' {} +

  for i in icons/{electrum_{dark,light}_icon,unpaid}.png
  do convert $i $i
  done

  sed -i '/fee_widgets.append((rbf_label, rbf_combo))/d
          s/set_rbf(True)/set_rbf(False)/' gui/qt/main_window.py
  sed -i 's/, rbf=False//; s/, rbf//' lib/commands.py
}

build() {
  cd electrum-ltc-$pkgver/
  pyrcc4 icons.qrc >gui/qt/icons_rc.py
  protoc --proto_path=lib/ --python_out=lib/ lib/paymentrequest.proto
  contrib/make_locale
  ./setup.py build
}

package() {
  cd electrum-ltc-$pkgver/

  ./setup.py install -O1 --root=$pkgdir

  mkdir -p $pkgdir/usr/share/doc/$pkgname/
  cp AUTHORS README.rst RELEASE-NOTES electrum-ltc.conf.sample $pkgdir/usr/share/doc/$pkgname/

  mkdir -p $pkgdir/usr/share/licenses/$pkgname/
  cp LICENCE $pkgdir/usr/share/licenses/$pkgname/
}
