pkgname="ddev-edge-bin"
pkgver=v1.16.0_alpha9
pkgrel=1
pkgdesc='DDEV-Local: a local PHP development environment system  (edge channel)'
arch=('x86_64')
url='https://github.com/drud/ddev'
license=('Apache')
provides=("ddev")
conflicts=("ddev")
depends=('docker' 'docker-compose')
optdepends=('bash-completion: subcommand completion support')
source=("https://github.com/drud/ddev/releases/download/v1.16.0-alpha9/ddev_linux-amd64.v1.16.0-alpha9.tar.gz")
sha256sums=("2a53a45f85014597605ca6d85b6e2fbcf826a1ab92711463acc33fa7f5a3daeb")

package() {
	install -D -m 0755 ddev "$pkgdir/usr/bin/ddev"
	install -D -m 0755 ddev_bash_completion.sh "$pkgdir/usr/share/bash-completion/completions/ddev"
}
