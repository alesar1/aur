# Maintainer: Shatur95 <genaloner@gmail.com>

# Submodule versions
_qonlinetranslator=1.2.0
_qhotkey=1.2.2
_qtaskbarcontrol=1.2.2
_singleapplication=3.0.15

pkgname=crow-translate
pkgver=2.2.1
pkgrel=1
pkgdesc="A simple and lightweight translator that allows to translate and say selected text using Google, Yandex and Bing translate API"
arch=('x86_64')
url="https://github.com/crow-translate/crow-translate"
license=('GPL3')
depends=('qt5-base' 'qt5-svg' 'qt5-multimedia' 'qt5-x11extras' 'gst-plugins-good' 'openssl')
makedepends=('qt5-tools')
source=($pkgname-$pkgver.tar.gz::"https://github.com/crow-translate/crow-translate/archive/$pkgver.tar.gz"
        QOnlineTranslator-$_qonlinetranslator.tar.gz::"https://github.com/Shatur95/QOnlineTranslator/archive/$_qonlinetranslator.tar.gz"
        QHotkey-$_qhotkey.tar.gz::"https://github.com/Skycoder42/QHotkey/archive/$_qhotkey.tar.gz"
        QTaskbarControl-$_qtaskbarcontrol.tar.gz::"https://github.com//Skycoder42/QTaskbarControl/archive/$_qtaskbarcontrol.tar.gz"
        SingleApplication-$_singleapplication.tar.gz::"https://github.com/itay-grudev/SingleApplication/archive/$_singleapplication.tar.gz")
sha256sums=('f9aa62f46f338f3c1d7b408bc234fae03d99f364a9c61f09db5696ee8d32a912'
            '5f5a2568fca47616296ea37fa148aa52749e06140de173b8454787662ae5fa14'
            '1a5a6eb81738a8f232df2dd5c908839871077e10ca3b9a6437daf5fda53d86ad'
            '18de904fea3c3f2c388069055a7aa964833f216d9e2a23dabf66f7f545b52f8f'
            '312c125a5564f5aaa22b532599bc9707c1570a2e97232529848a66dc74486de3')

# Move submodules into the project
prepare() {
    mv QOnlineTranslator-$_qonlinetranslator/* "$pkgname-$pkgver/src/qonlinetranslator"
    mv QHotkey-$_qhotkey/* "$pkgname-$pkgver/src/third-party/qhotkey"
    mv QTaskbarControl-$_qtaskbarcontrol/* "$pkgname-$pkgver/src/third-party/qtaskbarcontrol"
    mv SingleApplication-$_singleapplication/* "$pkgname-$pkgver/src/third-party/singleapplication"
}

build() {
    cd "$pkgname-$pkgver"
    qmake
    make
}

package() {
    cd "$pkgname-$pkgver"
    make INSTALL_ROOT="$pkgdir/" install
} 
