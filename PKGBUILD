# Maintainer: libertylocked <libertylocked@disroot.org>
# Contributor: Milo Gilad <myl0gcontact@gmail.com>

pkgname=bitwarden
pkgver=1.20.0
pkgrel=1
_jslibcommit='fe167beda9aa87b792fde2aa05db9cf167388f9a'
_nodeversion='10.20.1'
pkgdesc='Bitwarden Desktop Application'
arch=('x86_64')
url='https://github.com/bitwarden/desktop'
license=('GPL3')
makedepends=('expac' 'git' 'npm' 'python' 'nvm' 'jq' 'patch' 'pkgconf' 'make' 'gcc')
depends=('alsa-lib' 'electron' 'libnotify' 'libsecret' 'libxss' 'libxtst' 'nss')
conflicts=('bitwarden-git' 'bitwarden-bin')
options=('!strip' '!emptydirs')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/bitwarden/desktop/archive/v${pkgver}.tar.gz"
        "jslib-${_jslibcommit}.tar.gz::https://github.com/bitwarden/jslib/archive/${_jslibcommit}.tar.gz"
        "package.json.patch"
        "${pkgname}.sh"
        "${pkgname}.desktop")
sha512sums=('695e597765719e1524c62a73d3d0d4ecd9a9b24b7b1a0023092758f7f301e730f3a3c2c15e8c1ab6926df7d55b73faf2967bf8ba907b709f4231317960977d55'
            '6de5bfed9d4442f673dbff93e5aef157fa89fed31bb5f3807f9c97058ea4c77dd67792c2323e93254f4fa53b49359fd00e13717ea616f3e663e9aab59c343b0f'
            'b6b4b52ab3ab8e4ae726bbfad0027a0de0978bbf427bfe7582561114ad421f6778d83661423fac712f920cfac18d4045961591e00df3587fbf95942fa70ee50b'
            '724b548688e2af1d8d25e6ebe6e35831e891453f2df011e5fa757b57fcbcfef3c171510be4537652891441c65121bd9766f372f82d3edd5971fb77b726409575'
            '05b771e72f1925f61b710fb67e5709dbfd63855425d2ef146ca3770b050e78cb3933cffc7afb1ad43a1d87867b2c2486660c79fdfc95b3891befdff26c8520fd')

prepare() {
  # Link jslib
  rmdir "${srcdir}/desktop-${pkgver}/jslib"
  ln -s "${srcdir}/jslib-${_jslibcommit}" "${srcdir}/desktop-${pkgver}/jslib"
  cd "${srcdir}/desktop-${pkgver}"
  # Patch out postinstall routines
  patch --strip=1 package.json ${srcdir}/package.json.patch
  # Patch build to make it work with system electron
  SYSTEM_ELECTRON_VERSION=$(expac %v electron | cut -d'-' -f1)
  jq < package.json --arg ver $SYSTEM_ELECTRON_VERSION\
  '.build["electronVersion"]=$ver | .build["electronDist"]="/usr/lib/electron"'\
  > package.json.patched
  mv package.json.patched package.json
}

build() {
  export npm_config_cache="$srcdir/npm_cache"
  _npm_prefix=$(npm config get prefix)
  npm config delete prefix
  source /usr/share/nvm/init-nvm.sh
  nvm install ${_nodeversion} && nvm use ${_nodeversion}

  cd "${srcdir}/desktop-${pkgver}/jslib"
  npm install
  cd "${srcdir}/desktop-${pkgver}"
  npm install
  npm run build
  npm run clean:dist
  npx electron-builder --dir build

  # Restore node config from nvm
  npm config set prefix ${_npm_prefix}
  nvm unalias default
}

package() {
  cd "${srcdir}/desktop-${pkgver}"

  install -dm755 "${pkgdir}/usr/lib/${pkgname}"
  cp -r dist/linux-unpacked/resources "${pkgdir}/usr/lib/${pkgname}/"

  install -dm755 "${pkgdir}/usr/share/icons/hicolor"
  for i in 16 32 48 64 128 256 512; do
    install -Dm644 resources/icons/${i}x${i}.png "${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps/${pkgname}.png"
  done

  install -dm755 "${pkgdir}/usr/bin"
  install -Dm755 "${srcdir}/${pkgname}.sh" "${pkgdir}/usr/bin/bitwarden-desktop"

  install -Dm644 "${srcdir}"/${pkgname}.desktop "${pkgdir}"/usr/share/applications/${pkgname}.desktop
}
