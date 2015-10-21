# Maintainer: Emmanuel Gil Peyrot <emmanuel.peyrot@collabora.com>

_pkgname='git-phab'
pkgname='git-phab-git'
pkgver=r19.43d0734
pkgrel=1
pkgdesc='Git subcommand to integrate with phabricator'
arch=('any')
url='https://phabricator.freedesktop.org/project/profile/60/'
license=('GPL2')
depends=('python-gitpython' 'arcanist' 'python-argcomplete')
provides=("$_pkgname")
conflicts=("$_pkgname")
makedepends=('git')
source=("$_pkgname::git://anongit.freedesktop.org/git/git-phab")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

package() {
  cd "$srcdir/$_pkgname"
  install -Dm755 git-phab "$pkgdir/usr/bin/$_pkgname"
  install -Dm644 README "$pkgdir/usr/share/doc/$_pkgname/README"
}
