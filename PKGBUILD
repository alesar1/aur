# Owner: Daniel Mason (idanoo) <daniel@m2.nz>
pkgbase=element-desktop-git
_vers=v1.7.11
pkgver=v1.7.11.r0.g6cef14e6
pkgrel=1
pkgname=(element-web-git element-desktop-git)
pkgdesc="A glossy Matrix collaboration client for the desktop."
arch=('x86_64')
url="https://element.io"
license=('Apache')
depends=('electron')
makedepends=('git' 'nodejs' 'jq' 'yarn' 'npm' 'python' 'rust' 'sqlcipher' 'electron')
provides=('element-desktop')
backup=("etc/element/config.json")
_giturl='git://github.com/vector-im'
source=("element-web::${_giturl}/riot-web.git#tag=${_vers}"
        "element-desktop::${_giturl}/riot-desktop.git#tag=${_vers}"
        "element-desktop.desktop"
        "element-desktop.sh")
sha256sums=('SKIP'
            'SKIP'
            '81354e663e354bd66b3f2bb303314b790bdf6d61c3d8e2df7407eb500885647d'
            'e4965abefbd609cf88349437b811bc4433d671f5ec5cd51992fd6179d483925f')

pkgver() {
  cd "$srcdir/element-web"

  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd element-desktop
  # Switch target to output to directory rather than .deb package
  sed -i 's/"target": "deb"/"target": "dir"/g' package.json
  sed -i 's@"https://packages.riot.im/desktop/update/"@null@g' element.io/release/config.json
  yarn install

  cd ../element-web
  # Disable auto updating
  sed -i 's@"https://packages.riot.im/desktop/update/"@null@g' element.io/app/config.json

  yarn install
}

build() {
  cd element-web
  yarn build

  cd ../element-desktop
  yarn run build:native
  yarn run build
}

package_element-web-git() {
  pkgdesc="Glossy Matrix collaboration client for the web."
  provides=(vector-web)
  replaces=(vector-web)

  cd element-web

  install -d "${pkgdir}"/{usr/share/webapps,etc/webapps}/element

  cp -r webapp/* "${pkgdir}"/usr/share/webapps/element/
  install -Dm644 config.sample.json -t "${pkgdir}"/etc/webapps/element/
  ln -s /etc/webapps/element/config.json "${pkgdir}"/usr/share/webapps/element/
  echo "${pkgver}" > "${pkgdir}"/usr/share/webapps/element/version
}

package_element-desktop-git() {
  pkgdesc="Glossy Matrix collaboration client for the desktop."
  depends=("element-web-git=${pkgver}" electron sqlcipher)
  backup=('etc/element/config.json')

  cd element-desktop

  install -d "${pkgdir}"{/usr/lib/element,/etc/webapps/element}

  # Install the app content, replace the webapp with a symlink to the system package
  cp -r dist/linux-unpacked/resources/* "${pkgdir}"/usr/lib/element/
  ln -s /usr/share/webapps/element "${pkgdir}"/usr/lib/element/webapp

  # Config file
  ln -s /etc/element/config.json "${pkgdir}"/etc/webapps/element/config.json
  install -Dm644 element.io/release/config.json -t "${pkgdir}"/etc/element/

  # Required extras
  install -Dm644 ../element-desktop.desktop "${pkgdir}"/usr/share/applications/element-desktop.desktop
  install -Dm755 ../element-desktop.sh "${pkgdir}"/usr/bin/element-desktop

  # Icons
  install -Dm644 ../element-web/res/themes/element/img/logos/element-logo.svg "${pkgdir}"/usr/share/icons/hicolor/scalable/apps/element.svg

  for i in 16 24 48 64 96 128 256 512; do
    install -Dm644 build/icons/${i}x${i}.png "${pkgdir}"/usr/share/icons/hicolor/${i}x${i}/apps/element.png
  done
}
