# Maintainer: Ben Isenhart <bisenhar(at)uvm(dot)edu>
# Contributor: Seamus Connor
# Contributor: "Amhairghin" Oscar Garcia Amor (https://ogarcia.me)
# Contributor: Simon Gomizelj <simongmzlj(at)gmail(dot)com>
# Contributor: Kyle Manna <kyle(at)kylemanna(dot)com>

pkgname=slack-desktop-dark
pkgver=4.0.1
pkgrel=1
pkgdesc="Slack Desktop (Beta) for Linux, with dark theme patch"
arch=('x86_64')
url="https://slack.com/downloads"
license=('custom')
depends=('alsa-lib' 'gconf' 'gtk3' 'libcurl-compat' 'libsecret' 'libxss'
         'libxtst' 'nss' 'ttf-muli' 'glibc>=2.28-4' 'xdg-utils')
makedepends=('asar')
optdepends=('gnome-keyring')
conflicts=('slack-desktop')
source=("https://downloads.slack-edge.com/linux_releases/${pkgname%-dark}-${pkgver}-amd64.deb"
        "https://raw.githubusercontent.com/caiceA/slack-black-theme/master/slack-dark-mode.css"
        "darkify_slack.js"
        "${pkgname}.patch")
noextract=("${pkgname%-dark}-${pkgver}-amd64.deb")
sha256sums=('6277a6c3d9c1c55813ad4fe1e56702a486ab8ff36ecbef345d1794a3a644ecbc'
            '876522011f9830a9b1e195bd8ffcc54ee6fa002821ffc7f7ad248309e82bc38a'
            'SKIP'
            'SKIP')

package() {
    bsdtar -O -xf "slack-desktop-${pkgver}"*.deb data.tar.xz | bsdtar -C "${pkgdir}" -xJf -

    # Fix hardcoded icon path in .desktop file
    patch -d "${pkgdir}" -p1 <"${pkgname}".patch

    # Permission fix
    find "${pkgdir}" -type d -exec chmod 755 {} +

    # Remove all unnecessary stuff
    rm -rf "${pkgdir}/etc"
    rm -rf "${pkgdir}/usr/lib/slack/src"
    rm -rf "${pkgdir}/usr/share/lintian"
    rm -rf "${pkgdir}/usr/share/doc"

    # Slack packs resources into an ASAR, so it needs to be extracted
    resources="${pkgdir}/usr/lib/slack/resources"
    asar extract "${resources}/app.asar" "${resources}/app.asar.unpacked"

    # Insert the black theme directly into ssb-interop
    lineno=$(sed -n '/HERE/=' darkify_slack.js)
    file="${resources}/app.asar.unpacked/dist/ssb-interop.bundle.js"

    # The last line of ssb-interop is comment, so a newline prevents the first line
    # of our function from being commented out
    echo "" >> $file
    head -n $((lineno - 1)) darkify_slack.js >> $file
	sed -i -e '/\\E/d' -e 's/939393/ffffff/' slack-dark-mode.css # temporary fix for 'Add Reaction' icon
    cat slack-dark-mode.css >> $file
    tail -n +$((lineno + 1)) darkify_slack.js >> $file

    # Repack with the theme change
    asar pack "${resources}/app.asar.unpacked" "${resources}/app.asar" 

    # Move license
    install -dm755 "${pkgdir}/usr/share/licenses/${pkgname}"
    mv "${pkgdir}/usr/lib/slack/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}"
    ln -s "/usr/share/licenses/${pkgname}/LICENSE" "${pkgdir}/usr/lib/slack/LICENSE"
}
