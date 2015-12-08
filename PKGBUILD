#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=pm2ml
pkgver=2015.12.8
pkgrel=1
pkgdesc='Generate metalinks for downloading Pacman packages and databases.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/pm2ml"
depends=(pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('aria2: ppl script support.' 'python3-aur: AUR support' 'reflector: Reflector support')
backup=(etc/ppl.conf)
source=(
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2015.12.8.tar.xz
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2015.12.8.tar.xz.sig
)
sha512sums=(
  4fc91eab80f8b6b7348371aff696e3a59b7174f7ef28384cf98884a7b7037c57818931e79b94d311c7e5fc284d357670f6b305f0ed6a596e1a65b542ab64a11f
  fd50fba990e51687b61d96eca1c7acbaa3431db9ad2c74395a5c4bee788fbbb22ae2ab79af2fbad810f0a411b7a276eedff1425a5844080e31c1332d53b0d6cc
)
md5sums=(
  a95ac741dc675d2690a5673bfc35ff79
  f1a6cc98e75ae9e370d8850c2f4cbbf8
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
