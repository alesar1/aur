# Maintainer: Danilo <aur ät dbrgn döt ch>
pkgname=threema-desktop
_binname=threema
_variant=consumer
_appname="Threema"
pkgdesc="Threema Desktop (Threema Web in Electron)."
pkgver=1.2.0
pkgrel=2
_threema_web_ver=2.3.19 # Keep in sync with version used by threema-desktop
arch=('any')
url="https://github.com/threema-ch/threema-web-electron"
license=('AGPL')
depends=(electron17)
makedepends=(npm git)
source=(
  "threema-web-electron-v${pkgver}.tar.gz::https://github.com/threema-ch/threema-web-electron/archive/refs/tags/${pkgver}.tar.gz"
  "threema-web-v${_threema_web_ver}.tar.gz::https://github.com/threema-ch/threema-web/archive/refs/tags/v${_threema_web_ver}.tar.gz"
  "threema.desktop"
)
sha256sums=(
  'ef5e23600f5160acf6d9291b4b63c7984d72ee6ffd704593e7b3434758d31c81'
  '1e4ed72a69039bce344f44c5ca8553967d61f90c61923b2c0239d01a73d81f6a'
  'ccfdae3416e2a1f096cfaf67fd8f8dacb0d8348582fc666ecc8b5b0d08ef5bf2'
)

build() {
  cd "${srcdir}/threema-web-electron-${pkgver}/"

  # Copy threema-web source code (since threema-web-electron submodule
  # is not contained in GitHub export)
  rm -r "app/dependencies/threema-web"
  cp -R "../threema-web-${_threema_web_ver}" "app/dependencies/threema-web"

  # Build Threema Web
  export DEV_ENV=production
  export threema_web_version=threema-web-${_threema_web_ver}
  npm install
  ./tools/patches/patch-threema-web.sh
  npm run app:build:web
  ./tools/patches/post-patch-threema-web.sh

  # Build Electron app
  npm run app:install
  _target_os=linux-deb
  _target_dist=linux:deb
  node tools/patches/post-patch-threema-web.js $_target_os $_variant
  if [ "$_variant" = "red" ]; then tools/patches/red-patch-threema-web.sh; fi
  npm run electron:dist:$_target_dist:$_variant
}

package() {
  cd "${srcdir}/"

  _app_root="${srcdir}/threema-web-electron-${pkgver}"

  # Copy application
  mkdir -p "${pkgdir}/usr/lib/${pkgname}/resources/"
  cp "${_app_root}/app/build/dist-electron/packaged/${_appname}-linux-x64/resources/app.asar" \
     "${pkgdir}/usr/lib/${pkgname}/resources/"

  # Create launcher
  mkdir -p "${pkgdir}/usr/bin/"
  _launcher="${pkgdir}/usr/bin/${_binname}"
  echo -e "#!/bin/sh\nexec electron17 '/usr/lib/${pkgname}/resources/app.asar' '$@'" > "$_launcher"
  chmod +x "$_launcher"

  # Copy desktop files
  mkdir -p "${pkgdir}/usr/share/applications"
  mkdir -p "${pkgdir}/usr/share/pixmaps"
  cp "${_app_root}/app/assets/icons/png/${_variant}-512x512.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  cp "${srcdir}/threema.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  sed -i -s "s/{{appname}}/${_appname}/" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  sed -i -s "s/{{binname}}/${_binname}/" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  sed -i -s "s/{{pkgname}}/${pkgname}/" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  sed -i -s "s/{{pkgdesc}}/${pkgdesc}/" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}

# vim:set ts=2 sw=2 et:
