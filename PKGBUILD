# Maintainer: Evgeniy Alekseev

pkgname='ahriman'
pkgver=1.6.4
pkgrel=1
pkgdesc="ArcH Linux ReposItory MANager"
arch=('any')
url="https://github.com/arcan1s/ahriman"
license=('GPL3')
depends=('devtools' 'git' 'pyalpm' 'python-aur' 'python-passlib' 'python-srcinfo')
makedepends=('python-pip')
optdepends=('breezy: -bzr packages support'
            'darcs: -darcs packages support'
            'mercurial: -hg packages support'
            'python-aioauth-client: web server with OAuth2 authorization'
            'python-aiohttp: web server'
            'python-aiohttp-debugtoolbar: web server with enabled debug panel'
            'python-aiohttp-jinja2: web server'
            'python-aiohttp-security: web server with authorization'
            'python-aiohttp-session: web server with authorization'
            'python-boto3: sync to s3'
            'python-cryptography: web server with authorization'
            'python-jinja: html report generation'
            'rsync: sync by using rsync'
            'subversion: -svn packages support')
source=("https://github.com/arcan1s/ahriman/releases/download/$pkgver/$pkgname-$pkgver-src.tar.xz"
        'ahriman.sysusers'
        'ahriman.tmpfiles')
backup=('etc/ahriman.ini'
        'etc/ahriman.ini.d/logging.ini')

build() {
  cd "$pkgname"

  python setup.py build
}

package() {
  cd "$pkgname"

  python setup.py install --root="$pkgdir"

  install -Dm644 "$srcdir/$pkgname.sysusers" "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
  install -Dm644 "$srcdir/$pkgname.tmpfiles" "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
}

sha512sums=('f417ecdd1482940bed7edb0161d0cfcd7a1ad66ead3101a073fb5aab27ed9ff85c31ab66fa057e9e21a67d7382288e35cfc9bba9b19b2fa3faa7ead0f75368f7'
            '53d37efec812afebf86281716259f9ea78a307b83897166c72777251c3eebcb587ecee375d907514781fb2a5c808cbb24ef9f3f244f12740155d0603bf213131'
            '62b2eccc352d33853ef243c9cddd63663014aa97b87242f1b5bc5099a7dbd69ff3821f24ffc58e1b7f2387bd4e9e9712cc4c67f661b1724ad99cdf09b3717794')
