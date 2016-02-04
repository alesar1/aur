# Contributor: William Hahn <bill@hahn3.com>

pkgname=wrapaur
pkgver=2.0.9
pkgrel=2
pkgdesc="A simple pacman and AUR wrapper written in bash to help with everyday package tasks"
arch=('i686' 'x86_64')
url="https://aur.archlinux.org/packages/wrapaur/"
license=('GPL')
depends=('bash' 'coreutils' 'curl' 'grep' 'gawk' 'sed' 'git' 'pacman' 'sudo')
optdepends=('s-nail: required for mail notifications')
source=("wrapaur")
md5sums=('d4ddd0fa595d1e65214a104f38912695')

package() {
  install -Dm755 wrapaur "$pkgdir/usr/bin/wrapaur"
}
