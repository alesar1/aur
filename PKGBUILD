# Maintainer: Shatur95 <genaloner@gmail.com>

# Submodule versions
_qonlinetranslator=1.3.1
_qhotkey=1.4.1
_qtaskbarcontrol=2.0.1
_singleapplication=3.1.4

pkgname=crow-translate
pkgver=2.5.1
pkgrel=1
pkgdesc='A simple and lightweight translator that allows to translate and say selected text using Google, Yandex and Bing translate API'
arch=(x86_64)
url=https://github.com/crow-translate/crow-translate
license=(GPL3)
depends=(qt5-base qt5-svg qt5-multimedia qt5-x11extras gst-plugins-good openssl)
makedepends=(qt5-tools extra-cmake-modules)
source=($pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz
        QOnlineTranslator-$_qonlinetranslator.tar.gz::https://github.com/Shatur95/QOnlineTranslator/archive/$_qonlinetranslator.tar.gz
        QHotkey-$_qhotkey.tar.gz::https://github.com/Skycoder42/QHotkey/archive/$_qhotkey.tar.gz
        QTaskbarControl-$_qtaskbarcontrol.tar.gz::https://github.com//Skycoder42/QTaskbarControl/archive/$_qtaskbarcontrol.tar.gz
        SingleApplication-$_singleapplication.tar.gz::https://github.com/itay-grudev/SingleApplication/archive/v$_singleapplication.tar.gz)
sha256sums=(23a7c5faed049b92e71a038384787f6dc56da7210e74e33d02df514595c650e2
            af4a4495b2ddfc6f8e7eccc9fc871d253848620fd43a3d342e50ed974f822442
            516726432ba21aeab11c37d979d80a300108b774ee43be078dddd2e6055226d8
            b2f956bdc5fdba1477ca7f4bde9759a120055407e4a7cc0c9efbc3934ae72b01
            e3b75de67999d340e17f224286622ed8ffc3ed023bc573e369309181c1a365a9)

# Move submodules into the project
prepare() {
  mv QOnlineTranslator-$_qonlinetranslator/* $pkgname-$pkgver/src/qonlinetranslator
  mv QHotkey-$_qhotkey/* $pkgname-$pkgver/src/third-party/qhotkey
  mv QTaskbarControl-$_qtaskbarcontrol/* $pkgname-$pkgver/src/third-party/qtaskbarcontrol
  mv SingleApplication-$_singleapplication/* $pkgname-$pkgver/src/third-party/singleapplication
}

build() {
  mkdir -p $pkgname-$pkgver/build
  cd $pkgname-$pkgver/build

  cmake -D CMAKE_INSTALL_PREFIX="$pkgdir/usr" ..
  cmake --build .
}

package() {
  cd $pkgname-$pkgver/build

  cmake --install .
  rm -f "${pkgdir}/usr/share/icons/hicolor/icon-theme.cache"
} 
