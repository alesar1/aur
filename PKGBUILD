# Maintainer: Donald Webster <fryfrog@gmail.com>

pkgname=sabnzbd
pkgver=2.3.9
pkgrel=3
pkgdesc='A web-interface based binary newsgrabber with NZB file support'
url='http://www.sabnzbd.org'
arch=('any')
license=('GPL')
depends=('curl'
         'par2cmdline'
         'python2'
         'python2-cheetah3'
         'python2-sabyenc'
         'sqlite'
         'unrar'
         'unzip')

optdepends=('python2-feedparser: rss support'
            'python2-pyopenssl: ssl support'
            'par2cmdline-tbb: par2 multi-threading'
            'p7zip: for .7z support')

backup=('opt/sabnzbd/sabnzbd.ini')
source=("https://github.com/sabnzbd/sabnzbd/releases/download/${pkgver}/SABnzbd-${pkgver}-src.tar.gz"
        'sabnzbd.service'
        'sabnzbd.sysusers'
        'sabnzbd.tmpfiles')
        
sha256sums=('f3ab6dffba914e6ddf88f1a755ec3ebaa95f0bdbec6f04b7bf0f90822249bb0c'
            '3d48f2f4c2bcb6dac29cef13e21a91baec0fccb92d4e925033ade695df0a192f'
            '8cdeae7e8fa327bafc2fd1b19c1995f89f52b2ba231c8305b4e7269ab9e0738a'
            'f86a23384e430b79b328167262216ad315ef89c4a2c49276e6d25c5f7b4cf5bf')

package() {
  mkdir -p "${pkgdir}/opt/sabnzbd"
  touch "${pkgdir}/opt/sabnzbd/sabnzbd.ini"
  cp -r "${srcdir}/SABnzbd-${pkgver}/"* "${pkgdir}/opt/sabnzbd"

  # Fix for issues with Python 3
  find "${pkgdir}/opt/sabnzbd" -type f -exec sed -i 's/python/python2/g' {} \;
  find "${pkgdir}/opt/sabnzbd" -type d -exec chmod 755 {} \;
  find "${pkgdir}/opt/sabnzbd" -type f -exec chmod 644 {} \;
  chmod 755 "${pkgdir}/opt/sabnzbd/SABnzbd.py"

  install -D -m 644 "${srcdir}/sabnzbd.service" "${pkgdir}/usr/lib/systemd/system/sabnzbd.service"
  install -D -m 644 "SABnzbd-${pkgver}/linux/sabnzbd@.service" "${pkgdir}/usr/lib/systemd/system/sabnzbd@.service"
  install -D -m 644 "${srcdir}/sabnzbd.sysusers" "${pkgdir}/usr/lib/sysusers.d/sabnzbd.conf"
  install -D -m 644 "${srcdir}/sabnzbd.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/sabnzbd.conf"
}
