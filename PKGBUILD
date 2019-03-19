# Maintainer: Seamus Connor

pkgname=slack-desktop-dark
pkgver=3.3.8
pkgrel=1
pkgdesc="Slack Desktop (Beta) for Linux, with dark theme patch"
arch=('x86_64')
url="https://slack.com/downloads"
license=('custom')
depends=('alsa-lib' 'gconf' 'gtk3' 'libcurl-compat' 'libsecret' 'libxss' 'libxtst' 'nss' 'glibc>=2.28-4')
optdepends=('gnome-keyring')
conflicts=('slack-desktop')
source=("https://downloads.slack-edge.com/linux_releases/${pkgname%-dark}-${pkgver}-amd64.deb"
		"https://raw.githubusercontent.com/laCour/slack-night-mode/master/css/raw/black.css"
		"darkify_slack.js"
    	"${pkgname}.patch")
noextract=("${pkgname%-dark}-${pkgver}-amd64.deb")
sha256sums=('37042b2172edf1af02cbe48660800c355e0b16f8f8f5d1257525657ff72f8308'
            'aa0571363a23d1398c7b4014dd892bd90b153c979eb9b33efab1b5e46e2546ec'
            '4e25e00be82bf2809f4157e17a969109d3c0241efe9a37a960a055aa6b52fd32'
            'c952eb32dd59beff9fc5374853b04acde4a60ed8c39934fcd0b66829455d594d')

package() {
bsdtar -O -xf "slack-desktop-${pkgver}"*.deb data.tar.xz | bsdtar -C "${pkgdir}" -xJf -

# Fix hardcoded icon path in .desktop file
    patch -d "${pkgdir}" -p1 <"${pkgname}".patch

    # Permission fix
    find "${pkgdir}" -type d -exec chmod 755 {} +

    # Remove all unnecessary stuff
    rm -rf "${pkgdir}/etc"
    rm -rf "${pkgdir}/usr/share/lintian"
    rm -rf "${pkgdir}/usr/share/doc"

    # Insert the black theme directly into ssb-interop.js
    lineno=$(sed -n '/HERE/=' darkify_slack.js)
    file="${pkgdir}/usr/lib/slack/resources/app.asar.unpacked/src/static/ssb-interop.js"
    head -n $((lineno - 1)) darkify_slack.js >> $file
    cat black.css >> $file
    tail -n +$((lineno + 1)) darkify_slack.js >> $file

    # Move license
    install -dm755 "${pkgdir}/usr/share/licenses/${pkgname}"
    mv "${pkgdir}/usr/lib/slack/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}"
    ln -s "/usr/share/licenses/${pkgname}/LICENSE" "${pkgdir}/usr/lib/slack/LICENSE"
}
