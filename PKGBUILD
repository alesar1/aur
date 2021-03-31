pkgname="ddev-edge-bin"
pkgver=v1.17.0_rc2
pkgrel=1
pkgdesc='DDEV-Local: a local PHP development environment system  (edge channel)'
arch=('x86_64')
url='https://github.com/drud/ddev'
license=('Apache')
provides=("ddev")
conflicts=("ddev")
depends=('docker' 'docker-compose')
optdepends=('bash-completion: subcommand completion support')
source=("https://github.com/drud/ddev/releases/download/v1.17.0-rc2/ddev_linux-amd64.v1.17.0-rc2.tar.gz")
sha256sums=("e7d9e176c3d9cdc0bf72fddcd3eec9c44d73fae82f4870edae076082fb56e894")

package() {
	install -D -m 0755 ddev "$pkgdir/usr/bin/ddev"
	install -D -m 0755 ddev_bash_completion.sh "$pkgdir/usr/share/bash-completion/completions/ddev"
}
