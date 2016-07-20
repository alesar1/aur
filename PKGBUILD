# Maintainer: yhaupenthal <y dot h plus aur at posteo dot de>
# Contributor: Brice Waegeneire <brice dot wge at gmail dot com>
# Contributor: Reventlov <contact+aur@volcanis.me>
pkgname=isso
pkgver=0.10.4
pkgrel=1
pkgdesc="A commenting python server similar to Disqus"
arch=('any')
url="http://posativ.org/isso/"
license=('MIT')
depends=('python-werkzeug' 'python-html5lib' 'python-misaka-v1' 'python-itsdangerous' 'python-six' 'sqlite' 'python-setuptools')
makedepends=('git' 'python')
backup=('etc/isso.conf')
source=("https://pypi.python.org/packages/source/i/isso/isso-$pkgver.tar.gz" 
  "https://pypi.python.org/packages/source/i/isso/isso-$pkgver.tar.gz.asc"
  "https://raw.githubusercontent.com/posativ/isso/master/LICENSE"
  "isso.service")
install=$pkgname.install
sha256sums=('8666b7339605baf40be9e5dce7a7c772d3acf2b27c47c39ba76ab40a5500eaef'
            'SKIP'
            'd909d060d71c4d9ce92102fa68aa53c963db9b4b6ca315fa0817eafb07651fe2'
            'dfcf54f32094238c7e5344b2dc602925365c8eb0a58c03a922526461b894eba0')
validpgpkeys=("7757B21C0C6E5AE4BC6F6462FD1BA15E0E87FE5C")
package() {
  cd "${srcdir}"
  # License
  install -D -m 644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  msg "Starting build..."
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1

  # ... systemd
  install -D -m 644 "${srcdir}/isso.service" "${pkgdir}/usr/lib/systemd/system/isso.service"
  # ... common config
  install -D -m 644 "${srcdir}/${pkgname}-${pkgver}/share/isso.conf" "${pkgdir}/etc/isso.conf"
  # ... man pages
  install -D -m 644 "${srcdir}/${pkgname}-${pkgver}/man/man1/isso.1" "${pkgdir}/usr/share/man/man1/isso.1"
  install -D -m 644 "${srcdir}/${pkgname}-${pkgver}/man/man5/isso.conf.5" "${pkgdir}/usr/share/man/man5/isso.conf.5"
}

# vim:set ts=2 sw=2 et:
