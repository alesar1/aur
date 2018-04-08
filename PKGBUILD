# Maintainer: Seth Hendrick <seth@shendrick.net>
pkgname=chaskis
pkgver=0.6.1
pkgrel=1
epoch=
pkgdesc="A generic framework written in C# for making IRC Bots."
arch=('any')
url="https://github.com/xforever1313/Chaskis/"
license=('BSL')
groups=()
depends=('mono>=4.2.2')
makedepends=('nuget' 'git')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=()
source=("https://github.com/xforever1313/Chaskis/archive/$pkgver.tar.gz")
noextract=()
sha256sums=('c72f0ab6770594adfe79f2c0d5f40965a4c06a4fc99e39c7c6231626ef2b7889')
validpgpkeys=()

prepare() {
    echo "Nothing to prepare"
}

build() {
        cd "$srcdir/Chaskis-$pkgver"
        git clone https://github.com/xforever1313/sethcs SethCS
        nuget restore ./Chaskis/Chaskis.sln
        xbuild /p:Configuration=Release ./Chaskis/Chaskis.sln
}

check() {
        cd "$srcdir/Chaskis-$pkgver/Chaskis"
        mono ./packages/NUnit.ConsoleRunner.3.5.0/tools/nunit3-console.exe ./Tests/bin/Release/Tests.dll
}

package() {

        cd "$srcdir/Chaskis-$pkgver"

        mkdir -p $pkgdir/usr/lib

        mono ./Chaskis/Install/ChaskisCliInstaller/bin/Release/ChaskisCliInstaller.exe ./Chaskis $pkgdir/usr/lib ./Chaskis/Install/windows/Product.wxs Release

        # Systemd service
        mkdir -p $pkgdir/usr/lib/systemd/user
        cp ./Chaskis/Install/linux/systemd/chaskis.service $pkgdir/usr/lib/systemd/user/chaskis.service

        # Binary
        mkdir -p $pkgdir/usr/bin/
        cp ./Chaskis/Install/linux/bin/chaskis $pkgdir/usr/bin/chaskis
}

pre_install() {
    return
}

post_remove() {
    return
}

