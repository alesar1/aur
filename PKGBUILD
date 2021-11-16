# Maintainer: Timothy Flowers <t_chuck_flowers@yahoo.com>
pkgname=vim-awesome-git
pkgver=0.0.0
pkgrel=1
epoch=
pkgdesc="A CLI for searching, viewing, and installing the vim plugins described at vimawesome.com"
arch=('any')
url="https://github.com/chuck-flowers/vim-awesome-cli"
license=('GPL')
groups=()
depends=(
	'bash'
	'coreutils'
	'curl'
	'findutils'
	'git'
	'jq'
	'sed'
	'util-linux'
)
makedepends=(
	'coreutils'
	'gzip'
	'make'
	'pandoc'
	'sudo'
)
checkdepends=()
optdepends=(
	'xdg-utils: Opening vimawesome.com pages in the browser'
)
provides=(
	'vim-awesome'
)
conflicts=(
	'vim-awesome'
)
replaces=()
backup=()
options=()
install=
changelog=
source=("git+https://github.com/chuck-flowers/vim-awesome-cli")
md5sums=('SKIP')
noextract=()

build() {
	cd "vim-awesome-cli"
	make all
}

package() {
	echo "package"
	cd "vim-awesome-cli"
	sudo make install
}

