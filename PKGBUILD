pkgname=thonny-git
pkgver=r3934.3482d717
pkgrel=1
pkgdesc="Python IDE for beginners."
arch=('any')
url="http://thonny.org/"
license=('MIT')
conflicts=("thonny")
provides=("thonny")
depends=('openssl' 'python' 'python-beautifulsoup4' 'python-jedi' 'tcl' 'tk')
source=("git+https://github.com/thonny/thonny.git")
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/thonny"
    echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

package() {
    cd "$srcdir"

    install -Dm 755 "thonny/packaging/linux/thonny" "$pkgdir/usr/bin/thonny"

    sed -i 's|$target_dir|/usr|' "thonny/packaging/linux/Thonny.desktop"
    install -Dm 644 "thonny/packaging/linux/Thonny.desktop" \
            "$pkgdir/usr/share/applications/thonny.desktop"

    install -Dm 644 "thonny/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    # Install.py currently does not allow for setting root for creating a package
    # Files must by copied manually for now in section below.
    install -d  644 "$pkgdir/usr/lib/python3.6/site-packages/thonny"
    cp -dr --no-preserve=ownership "thonny/thonny" \
            "$pkgdir/usr/lib/python3.6/site-packages"

    pip3 install --prefix="$pkgdir/usr" --force distro tkinterhtml
}
