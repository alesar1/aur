# Maintainer: Alec Mev <alec@mev.earth>

pkgname=todoist-nativefier
pkgver=2021.04.01
pkgrel=1
pkgdesc='Todoist in shared Electron runtime'
arch=('x86_64')
url='https://todoist.com'
license=('MIT')
depends=('electron')
makedepends=(
  'curl'
  'gendesk'
  'nodejs-nativefier'
)

_name=Todoist

prepare() {
  cat > "${pkgname}" <<EOF
#!/usr/bin/env bash
exec electron /usr/share/${pkgname} "\$@"
EOF
  gendesk \
    --pkgname "${pkgname}" \
    --pkgdesc "${pkgdesc}" \
    --name "${_name}" \
    --categories "Network;Office;ProjectManagement;" \
    -n \
    -f
  curl \
    https://d3ptyyxy2at9ui.cloudfront.net/todoist_apple_touch_icon-4b89ad.png \
    > "${pkgname}.png"
}

build() {
  cd "${srcdir}"
  # https://github.com/nativefier/nativefier/pull/1146
  # https://github.com/nativefier/nativefier/issues/831
  nativefier \
    --name "${_name}" \
    --icon "${pkgname}.png" \
    --internal-urls '/^(https?:\/\/)?appleid\.apple\.com(\/.*)?$' \
    --maximize \
    --user-agent "Mozilla/5.0 (X11; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/87.0" \
    --single-instance \
    --verbose \
    https://todoist.com
}

package() {
  mkdir -p "${pkgdir}/usr/share"
  local _x=`echo "${_name}-linux-"*`
  cp -r "${_x}/resources/app" "${pkgdir}/usr/share/${pkgname}"
  install -Dm 755 -t "${pkgdir}/usr/bin/" "${pkgname}"
  install -Dm 644 -t "${pkgdir}/usr/share/applications/" "${pkgname}.desktop"
  install -Dm 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "${_x}/LICENSE"
  install -Dm 644 -t "${pkgdir}/usr/share/pixmaps/" "${pkgname}.png"
}
