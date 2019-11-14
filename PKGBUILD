# Maintainer: xsmile <>

pkgname=chromexup
pkgver=0.5.1
pkgrel=2
pkgdesc='External extension updater for Chromium based browsers'
arch=('any')
url='https://github.com/xsmile/chromexup'
license=('MIT')
makedepends=('python-setuptools')
depends=('python-requests')
install="$pkgname.install"
source=("$url/archive/$pkgver.tar.gz")
md5sums=('7cd34be5f2001499eeef3d0d4b08400a')

package() {
  cd $pkgname-$pkgver

  # Configuration template
  install -Dm644 config.ini.example -t "$pkgdir"/usr/share/$pkgname
  # Systemd scripts
  install -Dm644 scripts/systemd/$pkgname.service      -t "$pkgdir"/usr/lib/systemd/user
  install -Dm644 scripts/systemd/$pkgname-daily.timer  -t "$pkgdir"/usr/lib/systemd/user
  install -Dm644 scripts/systemd/$pkgname-weekly.timer -t "$pkgdir"/usr/lib/systemd/user
  # License
  install -Dm644 LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname

  python setup.py install --root="$pkgdir" --optimize=1
}
