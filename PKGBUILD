# Maintainer: Adam S Levy <adam@aslevy.com>
# Contributor: yesuu zhang <yesuu79@qq.com>
# Contributor: Tomasz Żok <tomasz.zok [at] gmail.com>
pkgname=vim-go
pkgver=1.24
pkgrel=1
pkgdesc="Go development plugin for Vim"
arch=(any)
url=https://github.com/fatih/vim-go
license=('BSD')
groups=('vim-plugins')
options=('!strip')
depends=(vim go)
optdepends=(
	'go-tools: developer tools'
	'delve: debugger'
)
source=("https://github.com/fatih/vim-go/archive/v${pkgver}.tar.gz")
sha256sums=('bc40c71536907826c83550142cfb3f249e85588e29e5c6e12f0204e19bb11252')

package() {
	cd "${srcdir}/vim-go-${pkgver}/"
        local vimdir="$pkgdir/usr/share/vim/vimfiles"
        install --directory "$vimdir"
	for dir in assets/ autoload/ compiler/ doc/ ftdetect/ ftplugin/ gosnippets/ indent/ plugin/ rplugin/ scripts/ syntax/ templates/; do
		cp --recursive "${dir}" "$vimdir/"
	done

        install -D LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
