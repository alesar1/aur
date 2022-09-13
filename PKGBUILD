# Maintainer: gardenapple <mailbox at appl.garden>

pkgname=tere-bin
pkgver=1.2.0
pkgrel=1
pkgdesc='Faster alternative to using cd and ls to browse folders in your terminal'
arch=('x86_64')
url='https://github.com/mgunyho/tere'
license=('custom:EUPL-1.2')
source=("https://github.com/mgunyho/tere/releases/download/v$pkgver/tere-$pkgver-x86_64-unknown-linux-gnu.zip"
        "https://github.com/mgunyho/tere/raw/v$pkgver/LICENSE")
provides=('tere')
conflicts=('tere')
sha256sums=('ba12631554bc5726a7bbd17f90a621041a620bdad6671456705d8c4f193085f1'
            '6fc9e709ccbfe0d77fbffa2427a983282be2eb88e47b1cdb49f21a83b4d1e665')
install=$pkgname.install

package() {
	install -Dm755 tere -t "$pkgdir/usr/bin"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/tere"
}
