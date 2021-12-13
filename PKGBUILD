# Maintainer: Jake <aur@ja-ke.tech>

pkgname=searx
pkgver=1.0.0
pkgrel=3
pkgdesc="A privacy-respecting, hackable metasearch engine (python(3) based)"
arch=('any')
url="https://searx.github.io/searx/"
license=('AGPL')
makedepends=('openssl')
depends=(
        'uwsgi'
        'uwsgi-plugin-python'
        'python-certifi'
        'python-flask-babel' # sub dep: flask, babel, jinja
        'python-lxml'
        'python-idna'
        'python-pygments'
        'python-dateutil'
        'python-yaml'
        'python-requests'
        'python-pysocks'
        'python-langdetect')
conflicts=('searx-git' )
replaces=('searx-py3')
backup=('etc/searx/settings.yml' 'etc/uwsgi/searx.ini')
source=("https://github.com/searx/searx/archive/v$pkgver.zip"
        'searx.ini'
        'searx.sysusers')
sha512sums=('725b585d2aedd6fa08d41d98dcdc62234035b0f07211d678e913fb3c9ef949ca4f1719c02368f09eb4469aaa2af8018bd860c088f7bd934de4a588c19e95db65'
            '476a4297c51681a9a92c6db3933359cc5a8ec292e45b229d98608ef2906b80c173868a30df06c329204c6f9371736a5bb322239860199526fd559780b37a2d0a'
            '6856e26451fe053d37c2ce4b9d5f3b35891dd8ec702c5256c02d04415124c57705abc497f12943948a85621bb0238d26c2c1f3a7bf42404a6ff1487c7655909e')

prepare() {
  cd "$srcdir/$pkgname-$pkgver"

  # Allow newer versions of the dependencies
  sed -i "s|==|>=|g" requirements.txt

  # Generate a random secret key
  sed -i -e "s/ultrasecretkey\" # change this!/`openssl rand -hex 32`\"/g" $pkgname/settings.yml

}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  local _site_packages="$(python -c 'import site; print(site.getsitepackages()[0])')"

  python setup.py install --root="$pkgdir" --optimize=1

  mv "${pkgdir}${_site_packages}"/{README.rst,requirements*,searx}

  mkdir -p "$pkgdir/etc/$pkgname"
  mv "${pkgdir}${_site_packages}/$pkgname/settings.yml" $pkgdir/etc/$pkgname/
  ln -s /etc/$pkgname/settings.yml "${pkgdir}${_site_packages}/$pkgname/settings.yml"

  install -Dm644 "${srcdir}/searx.sysusers" "${pkgdir}/usr/lib/sysusers.d/searx.conf"
  install -Dm644 "${srcdir}/searx.ini" "${pkgdir}/etc/uwsgi/searx.ini"
}
