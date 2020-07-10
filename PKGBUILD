pkgbase=revolution-desktop-git
pkgver=r9235.99ae606c
pkgrel=6
pkgname=(revolution-web-git revolution-desktop-git)
pkgdesc="A glossy Matrix collaboration client for the desktop."
arch=('x86_64')
url="https://gitlab.eastcoast.hosting/ponies/riot-web"
license=('custom:CSL')
depends=('electron')
makedepends=('git' 'nodejs' 'jq' 'yarn' 'npm' 'python' 'rust' 'sqlcipher' 'electron')
provides=('revolution-desktop')
backup=("etc/revolution/config.json")
_giturl='git+https://gitlab.eastcoast.hosting/ponies'
source=("matrix-js-sdk::${_giturl}/matrix-js-sdk.git"
	"matrix-react-sdk::${_giturl}/matrix-react-sdk.git"
	"riot-web::${_giturl}/riot-web.git"
        "riot-desktop::${_giturl}/riot-desktop.git"
        "revolution-desktop.desktop"
        "revolution-desktop.sh"
	"CSL.txt")
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            '822db5d897392092db26a12331d6800983061094f2626a47d33c323ac206aac8'
            '88e1ffc56fe389c5e692ce247243961ac827126f3da50aa591a1a8c792cfd896'
            'cb356a66b835aee9a277953efd754616b7da51e1b4cacd6027a0eea90a700b98'
)

pkgver() {
  cd "$srcdir/riot-web"

  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
  cd matrix-js-sdk
  yarn install
  yarn build
  yarn link

  cd ../matrix-react-sdk
  yarn install
  yarn build
  yarn link

  cd ../riot-web
  yarn link matrix-js-sdk
  yarn link matrix-react-sdk
  yarn install
  yarn build

  cd ../riot-desktop
  yarn install
  yarn run build:native
  yarn add electron
  yarn run build
}

package_revolution-web-git() {
  pkgdesc="Glossy Matrix collaboration client for the web."
  provides=(vector-web)
  replaces=(vector-web)

  cd riot-web

  install -d "${pkgdir}"/{usr/share/webapps,etc/webapps}/revolution

  cp -r webapp/* "${pkgdir}"/usr/share/webapps/revolution/
  install -Dm644 config.sample.json -t "${pkgdir}"/etc/webapps/revolution/
  ln -s /etc/webapps/revolution/config.json "${pkgdir}"/usr/share/webapps/revolution/
  echo "${pkgver}" > "${pkgdir}"/usr/share/webapps/revolution/version

  # Install license
  install -Dm644 ../CSL.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_revolution-desktop-git() {
  pkgdesc="Glossy Matrix collaboration client for the desktop."
  depends=("revolution-web-git=${pkgver}" electron sqlcipher)
  backup=('etc/revolution/config.json')

  cd riot-desktop

  install -d "${pkgdir}"{/usr/lib/revolution,/etc/webapps/revolution}

  # Install the app content, replace the webapp with a symlink to the system package
  cp -r dist/linux-unpacked/resources/* "${pkgdir}"/usr/lib/revolution/
  ln -s /usr/share/webapps/revolution "${pkgdir}"/usr/lib/revolution/webapp

  # Config file
  ln -s /etc/revolution/config.json "${pkgdir}"/etc/webapps/revolution/config.json
  mkdir "${pkgdir}"/etc/revolution/
  install -Tm644 ../riot-web/config.sample.json -t "${pkgdir}"/etc/revolution/config.json

  # Required extras
  install -Dm644 ../revolution-desktop.desktop "${pkgdir}"/usr/share/applications/revolution-desktop.desktop
  install -Dm755 ../revolution-desktop.sh "${pkgdir}"/usr/bin/revolution-desktop

  # Icons
  install -Dm644 ../riot-web/res/themes/riot/img/logos/riot-im-logo.svg "${pkgdir}"/usr/share/icons/hicolor/scalable/apps/revolution.svg
  for i in 16 24 48 64 96 128 256 512; do
    install -Dm644 build/icons/${i}x${i}.png "${pkgdir}"/usr/share/icons/hicolor/${i}x${i}/apps/revolution.png
  done

  # Install license
  install -Dm644 ../CSL.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
