# Maintainer: Andreas Schreiner <andreas.schreiner@sonnenmulde.at>
# Contributor: Mike WB2FKO <mph at sportscliche dot com>
pkgname=quisk
pkgver=4.1.1
pkgrel=2
pkgdesc="Software defined radio (SDR)"
arch=('i686' 'x86_64')
url="http://james.ahlstrom.name/quisk/"
license=('GPL')
depends=('python2' 'fftw' 'portaudio' 'wxpython')
optdepends=('codec2: Enable digital voice communication with FreeDV')
source=(http://james.ahlstrom.name/quisk/$pkgname-$pkgver.tar.gz
        $pkgname
        $pkgname.desktop
        $pkgname.patch)
sha512sums=('c69535b838fb55426746f1efafc8109f7c74b84eee9237df99a167c04d6b8666428695aacb67f5ec5c267e0bc2c489cecf7616de0d114a4b3f518c5dae41aef6'
            '94f09cc0e847e308ca66bf90c8f729924273f66524fed8bc63565c8060113ae8dcae6ed3f14075e03a7168da182059b3279c0315a1d2d00cf4292e4d68cf7871'
            '3ad02f730b4a4033b86a2ce510865c13c2f2e228304283cae0bb389442f7ab49a5d530cd94e32460e19b53da24037abc855027ce34c93fdabcd1faf8a91852b1'
            '34735d9913b59cf4337ec98921f3b88c9e46cb5cb748bcde19b8a2679a9e4c85e335a3101da4a637deb0ee8b7c7182bc48356b9a51b20e14d17ffa1caed23b14')
build() {
  # use python2 instead python for compilation
  cd $srcdir
  patch -p1 < $pkgname.patch

  cd "$srcdir/$pkgname-$pkgver"
  make
}

package() {
    mkdir -p $pkgdir/opt/$pkgname
    cd "$srcdir/$pkgname-$pkgver"
    install -Dm644 quisk $pkgdir/opt/$pkgname/quisk
    cp -ra *.h $pkgdir/opt/$pkgname
    cp -ra *.c $pkgdir/opt/$pkgname
    cp -ra *.html $pkgdir/opt/$pkgname
    cp -ra *.py $pkgdir/opt/$pkgname
    cp -ra *.so $pkgdir/opt/$pkgname
    cp -ra *.txt $pkgdir/opt/$pkgname
    mv charleston "$pkgdir/opt/$pkgname"
    mv n2adr "$pkgdir/opt/$pkgname"
    mv sdriqpkg "$pkgdir/opt/$pkgname"
    mv softrock "$pkgdir/opt/$pkgname"
    mv usb "$pkgdir/opt/$pkgname"
    mv hiqsdr "$pkgdir/opt/$pkgname"
    find "$pkgdir/opt/$pkgname/" -type f  | xargs chmod 644
    find "$pkgdir/opt/$pkgname/" -type d | xargs chmod 755
    cd $srcdir
    mkdir -p $pkgdir/usr/share/applications
#   If the working directory is moved (e.g. from /opt to /home) 
#   the following .desktop file will have to be edited. Developer
#   has not provided a launcher icon.
    install -Dm644 $pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
    echo -e "\n Quisk will be installed in the /opt directory of root \n"
    mkdir -p $pkgdir/usr/bin
    install -Dm755 $pkgname $pkgdir/usr/bin/$pkgname
}
