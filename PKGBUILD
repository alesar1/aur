# Previous maintainer: Michael Serajnik <m at mser dot at>
# Maintainer: Score_Under <seejay 11@gmail com>
options=(!strip)  # Don't strip libs because there aren't any
DOC_DIRS=(opt/hydrus/help)

pkgname=hydrus-git
_pkgname=hydrus
pkgver=459.3.r0.g0dfba5a8
pkgrel=1
pkgdesc="Danbooru-like image tagging and searching system for the desktop"
arch=(any)
license=(WTFPL)
install=hydrus.install
provides=(hydrus)
conflicts=(hydrus hydrus-docs hydrus-sources)
url=http://hydrusnetwork.github.io/hydrus/
depends=(python python-opencv python-beautifulsoup4 python-yaml
         'python-lz4>=0.10.1' python-numpy python-twisted python-pillow
         python-pysocks python-psutil python-send2trash python-html5lib
         python-requests python-qtpy emoji-font python-mpv
         python-service-identity qt5-python-bindings fmt pyside2)
makedepends=(git mkdocs mkdocs-material)
optdepends=('ffmpeg: show duration and other information on video thumbnails'
            'miniupnpc: automatic port forwarding'
            'desktop-file-utils: to add Hydrus to your desktop environment menus'
            'python-cloudscraper: bypass cloudflare "checking your browser" challenges'
            'python-pyqt5-chart: display bandwidth usage charts'
            'python-pyopenssl: to generate certificates for accessing client API and server via HTTPS')
source=("git+https://github.com/hydrusnetwork/${_pkgname}.git"
        paths-in-opt.patch
        hydrus-client
        hydrus-server
        hydrus.desktop)
sha256sums=('SKIP'
            '6dde03b452b842d089cfdffb4cf8554b4985934d664054b2bb71006694f923c6'
            'd2cb826ce0dd1892ab95fc3b14dbe6bd312210f653d0aea31938eeb7e361fdc5'
            '463841cc16059b516cc327cfbc30d3383e2236b085ba2d503e82f5be39444806'
            '9b8c2603a8040ae80152ff9a718ad3e8803fdc3029a939e3c0e932ea35ded923')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "${srcdir}/${_pkgname}"
  git apply < ../paths-in-opt.patch

  # Remove unit tests
  rm -f "hydrus/Test"*.py
  rm -rf "static/testing"
}

build() {
  cd "${srcdir}/${_pkgname}"

  msg 'Compiling .py files...'
  python -OO -m compileall -fq .

  msg 'Building documentation...'
  mkdocs build -d help
}

package() {
  cd "${srcdir}/${_pkgname}"

  # Create /opt/hydrus and copy hydrus files to there
  install -m755 -d "${pkgdir}/opt/hydrus"
  cp -r help hydrus static client.pyw server.py "${pkgdir}/opt/hydrus/"

  # Create and populate /opt/hydrus/bin
  install -d -m755 "${pkgdir}/opt/hydrus/bin"
  ln -s /usr/bin/upnpc "${pkgdir}/opt/hydrus/bin/upnpc_linux"
  ln -s /usr/bin/ffmpeg "${pkgdir}/opt/hydrus/bin/ffmpeg"

  # Install hydrus-client and hydrus-server executables
  install -d -m755 "${pkgdir}/usr/bin"
  install -m755 ../hydrus-{client,server} "${pkgdir}/usr/bin/"

  # Install .desktop shortcut
  install -d -m755 "${pkgdir}/usr/share/applications"
  install -m644 ../hydrus.desktop "${pkgdir}/usr/share/applications/${_pkgname}.desktop"

  # Install license files
  install -d -m755 "${pkgdir}/usr/share/licenses/${_pkgname}"
  install -m644 COPYING "${pkgdir}/usr/share/licenses/${_pkgname}/"
  install -m644 license.txt "${pkgdir}/usr/share/licenses/${_pkgname}/"
}
