#Maintainer: Xyne <gro xunilhcra enyx, backwards>
pkgname=idemptables
pkgver=2012
pkgrel=5
pkgdesc='Idempotent iptables wrapper for appending and deleting rules.'
arch=(any)
license=(GPL)
url="https://xyne.dev/projects/idemptables"
depends=(iptables)
source=(
  https://xyne.dev/projects/idemptables/src/idemptables-2012.tar.xz
  https://xyne.dev/projects/idemptables/src/idemptables-2012.tar.xz.sig
)
sha512sums=(
  c8512b30ed528ac81d45ff4eabe6098371ee6f40f9a85ff0d716e9a051912d170a7d1b1fde04b1b1074fbe082a5380bff6d0071ea4b33d18d98063617ee37457
  27d860f05202997bba9c6bc5f04c2a4dce3ad547752deacb0cf263e70006883067523966cab64e66220069ea03be8cfb318990975e62f72139e4087fab1a7f09
)
md5sums=(
  937834cc23b4afe9628fa7bc69ad39ba
  e23f8fcbcf39d0c32c4892397cd5603b
)
validpgpkeys=('D89FAAEB4CECAFD199A2F5E612C6F735F7A9A519')

package ()
{
  install -Dm755 "$srcdir/$pkgname-$pkgver/$pkgname" "$pkgdir/usr/bin/$pkgname"
}


# vim: set ts=2 sw=2 et:
