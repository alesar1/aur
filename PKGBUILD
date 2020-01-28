# Maintainer:   M.Reynolds <blackboxnetworkproject@gmail.com>

pkgname=thonny
pkgver=3.2.6
pkgrel=1
pkgdesc="Python IDE for beginners."
arch=('any')
url="http://thonny.org"
license=('MIT')
depends=('openssl' 'python' 'python-beautifulsoup4' 'python-docutils' 'mypy' 'python-asttokens'
         'python-astroid' 'python-pylint' 'python-pyserial' 'python-jedi' 'tcl' 'tk')
source=("https://github.com/$pkgname/$pkgname/releases/download/v$pkgver/$pkgname-$pkgver-x86_64.tar.gz")
sha256sums=('7dcf8de1e52c2f747a5ef0236475f17ceb8b59e4802395c8fbb9165272fa0a71')

package() {

    cd "$srcdir"

    # Correct install path for binary and icon file
    sed -i 's|$target_dir|/usr|'                                "$pkgname/templates/Thonny.desktop"

    # Update launch script for the correct Python version
    sed -i 's|3.7|3.8|' "$pkgname/bin/thonny"
    sed -i 's|3.7|3.8|' "$pkgname/templates/Thonny.desktop"

    install -Dm 644     "$pkgname/templates/Thonny.desktop"     "$pkgdir/usr/share/applications/thonny.desktop"
    install -Dm 644     "$pkgname/LICENSE.txt"                  "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm 755     "$pkgname/bin/thonny"                   "$pkgdir/usr/bin/thonny"

    # Install.py currently does not allow for setting root for creating a package
    # Files must by copied manually for now in section below.
    install -d  644                 "$pkgdir/usr/lib/python3.8/site-packages/thonny"
    cp -dr --no-preserve=ownership  "$pkgname/lib/python3.7/site-packages/thonny" "$pkgdir/usr/lib/python3.8/site-packages"
}
