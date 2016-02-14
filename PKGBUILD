#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=pm2ml
pkgver=2016.2.14
pkgrel=1
pkgdesc='Generate metalinks for downloading Pacman packages and databases.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/pm2ml"
depends=(pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('aria2: ppl script support.' 'python3-aur: AUR support' 'reflector: Reflector support')
backup=(etc/ppl.conf)
source=(
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2016.2.14.tar.xz
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2016.2.14.tar.xz.sig
)
sha512sums=(
  532fa1c36456d0af41fffcf7403ac347ff2dbe6344a002fee1d39ab75219f20562b7667912bbe0b5b68c8edd5009fd45ff336348a9f758021db53defcde840b7
  aa3c2f23ad1aa58d6e68b4969aea27edde9ba3ca97edb9ca4b4277da5b61014a917f6f65f18e63a34223ed0cfa0fdc92310a3a92ee8668142a093331ab0a7439
)
md5sums=(
  3de66db860278f812f5969616e2cf9b9
  8e516b65afc268f426a8e5d9a3113919
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
  for foo_ in ppl pplsyu ppls; do
    install -Dm755 "$foo_" "$pkgdir/usr/bin/$foo_"
  done
  install -Dm644 "ppl.conf" "$pkgdir/etc/ppl.conf"
}

# vim: set ts=2 sw=2 et:
