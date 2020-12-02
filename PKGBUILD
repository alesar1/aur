#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=powerpill
pkgver=2020
pkgrel=2
pkgdesc='Pacman wrapper for faster downloads.'
arch=(any)
license=(GPL)
url="https://xyne.archlinux.ca/projects/powerpill"
depends=(aria2 'pm2ml>2012.12.12' pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('python3-threaded_servers: internal Pacserve support' 'reflector: Reflector and Rsync support' 'rsync: Rsync download support')
backup=(etc/powerpill/powerpill.json)
source=(
  https://xyne.archlinux.ca/projects/powerpill/src/powerpill-2020.tar.xz
  https://xyne.archlinux.ca/projects/powerpill/src/powerpill-2020.tar.xz.sig
)
sha512sums=(
  f53ba3dc5a4749916851df0b81054e12250aa1b4c83cf1fa504bee8a754a3b2f97cdaccff9a282d6ec323c4f4e2352c8acffa994b4e472e59b54a65054bac453
  e1604646019603398ab79310a24abd9d4af147de7701abe237097993570779165174ad5578ebcdf98f470fac07e07b524915d91c0a6e1b8f100ec2e4b6c43a5e
)
md5sums=(
  7c9bd894bb7d9df741930f9e4486fc40
  6be4c558bde8b2ba85745e2586982b2f
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm755 'powerpill' "$pkgdir/usr/bin/powerpill"
  install -Dm644 'powerpill.json' "$pkgdir/etc/powerpill/powerpill.json"
  install -Dm644 'man/powerpill.json.1.gz' "$pkgdir/usr/share/man/man1/powerpill.json.1.gz"
  install -Dm644 'powerpill-bash-completion.sh' "$pkgdir/usr/share/bash-completion/completions/powerpill"
  install -Dm644 '_powerpill.zsh' "$pkgdir/usr/share/zsh/site-functions/_powerpill"
}

# vim: set ts=2 sw=2 et:
