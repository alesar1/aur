# Maintainer: KokaKiwi <kokakiwi+aur@kokakiwi.net>
# Contributor: Rodrigo Gryzinski <rogryza@gmail.com>

_dhall_ver=1.36.0
pkgname='dhall-bash-bin'
pkgver=1.0.34
pkgrel=1
pkgdesc="Dhall to bash compiler"
arch=('x86_64')
url='https://github.com/dhall-lang/dhall-haskell'
license=('BSD')
source=("https://github.com/dhall-lang/dhall-haskell/releases/download/$_dhall_ver/dhall-bash-$pkgver-x86_64-linux.tar.bz2"
        "https://raw.githubusercontent.com/dhall-lang/dhall-haskell/$_dhall_ver/dhall-bash/LICENSE")
sha256sums=('745142d62b57f5a85cd27e2d34a02f02d39a291d44f7dcca4b818acf4d6c5d5b'
            '91f68ca8606e7ae993148187e397e20431aa6d870ac9fcc70330a0479468eef9')
b2sums=('e6ff6f9d6539bace655ba3e53b87db7605d368fcd2ab6e5c15ac11b1edfe95a0afe05e574ac4489355ab7b139dc64ef8d584514f25cb5b3830397be477784b76'
        '1431794398f5ff3af38b738559bef170c77755d6c46b35f2db3a68417aa70e5e2c2be39d1036443121531a91ffd631c901b7185ce30ab401440ce5f2fa31c25a')

package() {
	install -Dt "$pkgdir/usr/bin/" "$srcdir/bin/dhall-to-bash"
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
