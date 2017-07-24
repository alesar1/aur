# Maintainer: Dan Printzell <arch@vild.io>
# Contributor: Davi da Silva Böger <dsboger at gmail dot com>
# Contributor: Moritz Maxeiner <moritz@ucworks.org>

pkgname=('dub-git')
pkgver=1.4.0.rc.1.r46.46a74e2
pkgrel=1
pkgdesc="Package manager for D packages, git version"
arch=('i686' 'x86_64')
url="https://github.com/D-Programming-Language/dub"
license=('MIT')
groups=('dlang')
depends=('curl')
makedepends=('git' 'dmd')
provides=('dub')
conflicts=('dub')

source=('git+https://github.com/D-Programming-Language/dub')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/dub"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-\)g/r\1/;s/-/./g'
}

build() {
  DC=dmd
	cd "$srcdir/dub"

  echo Generating version file...
  GITVER=${pkgver}
  echo "module dub.version_;" > source/dub/version_.d
  echo "enum dubVersion = \"$GITVER\";" >> source/dub/version_.d

  $DC -ofbin/dub -w -O -g -version=DubUseCurl -Isource -L-lcurl @build-files.txt
}

package() {
	# binaries
	install -Dm755 "$srcdir/dub/bin/dub" "$pkgdir/usr/bin/dub"

	# license
	install -Dm644 "$srcdir/dub/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

	# bash completion
	install -Dm644 "$srcdir/dub/scripts/bash-completion/dub.bash" "$pkgdir/usr/share/bash-completion/completions/dub"
}
