# Maintainer: Christopher P. Fair <christopherpfair@comcast.net> 

pkgname=lacap
longname=latin-catholic-prayers
pkgver=1.0.1
pkgrel=1
pkgdesc="Memorize Catholic prayers in Latin."
arch=('i686' 'x86_64')
url="https://gitlab.com/chrisfair/latin-catholic-prayers"
license=('GPL3')
makedepends=('npm')
depends=('gtk3' 'webkit2gtk')
provides=('lacap')
source=("https://gitlab.com/chrisfair/latin-catholic-prayers/-/archive/v${pkgver}/latin-catholic-prayers-v${pkgver}.tar.gz")
sha256sums=('b9b52b5433c1f6ba402a2b1bbcf53dc5ab45d261813fc9df9593e3ca8cc578dc')

build() {
     export GOPATH="$srcdir"/gopath
     export GOBIN="$srcdir"/gopath/bin
     export PATH=$GOBIN:$PATH
     cd "$srcdir/$longname-v$pkgver"
     go get -u github.com/wailsapp/wails/cmd/wails >/dev/null 2>&1
     wails build -f >/dev/null 2>&1
}


package() {
	install -Dm755 $srcdir/$longname-v$pkgver/build/$longname $pkgdir/opt/chrisfair/$longname/$pkgname
	rsync -av --no-o --no-g $srcdir/$longname-v$pkgver/Prayers $pkgdir/opt/chrisfair/$longname/ >/dev/null 2>&1
	rsync -av --no-o --no-g $srcdir/$longname-v$pkgver/Sounds $pkgdir/opt/chrisfair/$longname/ >/dev/null 2>&1
	rsync -av --no-o --no-g $srcdir/$longname-v$pkgver/HelpFiles $pkgdir/opt/chrisfair/$longname/ >/dev/null 2>&1
     mkdir -p $pkgdir/usr/bin/
     cd $pkgdir/usr/bin
     ln -s /opt/chrisfair/$longname/$pkgname
     chmod -R uag+rw $srcdir
}
