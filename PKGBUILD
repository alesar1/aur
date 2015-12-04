#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=powerpill
pkgver=2015.12.4
pkgrel=1
pkgdesc='Pacman wrapper for parallel and segmented downloads.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/powerpill"
depends=(python3 pyalpm 'pm2ml>2012.12.12' reflector aria2 python3-xcpf)
optdepends=('python3-threaded_servers: internal Pacserve support' 'rsync: Rsync download support')
backup=(etc/powerpill/powerpill.json)
source=(
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2015.12.4.tar.xz
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2015.12.4.tar.xz.sig
)
sha512sums=(
  4ea21fe767070424ccca1e5b3c8e96b0d3609f28bc1397bd8003c34d37e9730878dcd0cee9ad541135ad24fddcdd6bcf4f0003930237516761de77e464910b69
  1e6a8af6eabeef5fc6b1258fb8426b9850f2595b52dce63bb9f099df0097dc2e3f6ab04e399bb9c85c09ac9f9d3fd84a0ac3ad7980a6b22c60afae45c3e41f70
)
md5sums=(
  a8cbf14c9b96e10665d7a4ffbbe3a0f5
  bbd7a49e40cd225e882d10f7d94f028e
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm755 "powerpill" "$pkgdir/usr/bin/powerpill"
  install -Dm644 "powerpill.json" "$pkgdir/etc/powerpill/powerpill.json"
  install -Dm644 "man/powerpill.json.1.gz" "$pkgdir/usr/share/man/man1/powerpill.json.1.gz"
  install -Dm644 "powerpill-bash-completion.sh" "$pkgdir/usr/share/bash-completion/completions/powerpill"
}

# vim: set ts=2 sw=2 et:
