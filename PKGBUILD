# Maintainer: Rodrigo Gryzinski <rogryza@gmail.com>

pkgname='dhall-lsp-server-bin'
pkgver=1.0.1
pkgrel=1
pkgdesc="Language Server Protocol implementation for Dhall"
arch=('x86_64')
url='https://github.com/dhall-lang/dhall-haskell'
license=('BSD')

_dhall_ver=1.26.1

source=("https://github.com/dhall-lang/dhall-haskell/releases/download/$_dhall_ver/dhall-lsp-server-$pkgver-x86_64-linux.tar.bz2"
        "https://raw.githubusercontent.com/dhall-lang/dhall-haskell/$_dhall_ver/dhall-lsp-server/LICENSE")
sha256sums=('364f5cd4f0e1361974d231a3b3ed3d1813034567f6313022dc0e7d2d91e5b1bb'
            'adeacdbe96b7b9f8f9fbb1db9b31f77792e603180484dfe4a5c52bc5496e2046')

function package {
	install -Dt "$pkgdir/usr/bin/" "$srcdir/bin/dhall-lsp-server"
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
