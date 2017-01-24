# Maintainer: Josip Ponjavic <josipponjavic at gmail dot com>

pkgname=streamlink-git
pkgver=0.3.0.r8.g5b9f68a
pkgrel=1
pkgdesc='CLI program that launches streams from various streaming services in a custom video player (livestreamer fork)'
arch=('any')
url='https://streamlink.github.io/'
license=('BSD')
depends=('python-pycryptodome' 'python-requests' 'python-setuptools' 'rtmpdump')
checkdepends=('python-mock' 'python-pytest')
makedepends=('git' 'python-sphinx')
optdepends=('ffmpeg: Required to play streams that are made up of separate audio and video streams, eg. YouTube 1080p+'
            'python-librtmp: Required by the ustreamtv plugin to be able to use non-mobile streams.')
provides=('streamlink')
conflicts=('streamlink')
source=('git+https://github.com/streamlink/streamlink.git')
sha256sums=('SKIP')

pkgver() {
  cd streamlink
  git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

build() {
  cd streamlink
  python setup.py build_sphinx -b man
}

check() {
  cd streamlink
  python setup.py test || warning "Tests failed"
}

package() {
  cd streamlink
  python setup.py install --root="$pkgdir" --optimize=1
  install -Dm644 build/sphinx/man/streamlink.1 \
    "$pkgdir/usr/share/man/man1/streamlink.1"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
