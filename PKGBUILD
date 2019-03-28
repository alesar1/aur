# Maintainer: K900 <me@0upti.me>

pkgname=cisco-anyconnect
pkgver=4.7.00136
pkgrel=1
pkgdesc='Cisco AnyConnect Secure Mobility Client'
arch=('x86_64')
depends=('libxml2' 'ca-certificates')
optdepends=(
    'hicolor-icon-theme: required by desktop shortcuts'
    'gtk2: required by vpnui'
    'glib2: required by vpnui'
    'gtk3: required by acwebhelper'
)
license=('custom')

# stripping the binaries trips some sort of an integrity check inside vpnagentd
options=('!strip')

url='https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html'

_filename="anyconnect-linux64-${pkgver}-core-vpn-webdeploy-k9.sh"

# you will have to obtain the installer yourself - it's not available publicly
source=("file://${_filename}" "vpnagentd.service" "anyconnect.sh" "anyconnect.csh" "AnyConnectLocalPolicy.xml")

sha256sums=('39d369f3081fb6dbc795a92df3a07e404cebf8c43383abd45d65a2a83b32a9b1'
            '9d37640195b0fa4ffb073e1b006b4b9546595f7bd3b25a4fe9a0d43a75cd57b8'
            'dcc7a5dcbe4387f3e4a2a3f260b4197faf1b79adddf0d4dad3a02bc6041effa6'
            '0fcd62bd5d734c239bb7bda7c7e7791b9b8d76a019d2b42ff74caa998e7e9733'
            'b7c65a236e671d3eb527a3377e22b66018c450d726f71fa6344530a75255dac7')

prepare() {
    cd "${srcdir}"

    # stolen from vpn_install.sh
    local marker=$((`grep -an "[B]EGIN\ ARCHIVE" "${_filename}" | cut -d ":" -f 1` + 1))
    local marker_end=$((`grep -an "[E]ND\ ARCHIVE" "${_filename}" | cut -d ":" -f 1` - 1))

    head -n ${marker_end} "${_filename}" | tail -n +${marker} | head --bytes=-1 | tar xz
}

package() {
    cd "${srcdir}/vpn"

    # install binaries
    for binary in "vpnagentd" "vpn" "vpndownloader" "vpndownloader-cli" "manifesttool" "acinstallhelper" "vpnui" "acwebhelper"; do
        install -Dm755 ${binary} "${pkgdir}/opt/cisco/anyconnect/bin/${binary}"
    done

    # install libs
    for lib in "libvpnagentutilities.so" "libvpncommon.so" "libvpncommoncrypt.so" \
        "libvpnapi.so" "libacruntime.so" "libacciscossl.so" "libacciscocrypto.so" \
        "libboost_date_time.so" "libboost_filesystem.so" "libboost_system.so" \
        "libboost_thread.so" "libboost_signals.so" "libboost_chrono.so" \
        "libaccurl.so.4.5.0"; do
        install -Dm755 ${lib} "${pkgdir}/opt/cisco/anyconnect/lib/${lib}"
    done

    # the installer copies all the other symlinks, but creates this one
    # for some reason so let's just create it ourselves
    ln -s /opt/cisco/anyconnect/lib/libaccurl.so.4.5.0 "${pkgdir}/opt/cisco/anyconnect/lib/libaccurl.so.4"

    # install plugins
    # we intentionally don't install the telemetry plugin here
    # because it tries to write to /opt and we don't want that
    for plugin in "libvpnipsec.so"; do
        install -Dm755 ${plugin} "${pkgdir}/opt/cisco/anyconnect/bin/plugins/${plugin}"
    done

    cp -R resources "${pkgdir}/opt/cisco/anyconnect/resources"

    # install some misc stuff
    install -Dm444 AnyConnectProfile.xsd "${pkgdir}/opt/cisco/anyconnect/profile/AnyConnectProfile.xsd"

    for file in "ACManifestVPN.xml" "update.txt" "AnyConnectLocalPolicy.xsd"; do
        install -Dm444 ${file} "${pkgdir}/opt/cisco/anyconnect/${file}"
    done

    # install desktop file for vpnui
    install -Dm644 resources/vpnui48.png "${pkgdir}/usr/share/icons/hicolor/48x48/apps/cisco-anyconnect.png"
    install -Dm644 resources/vpnui128.png "${pkgdir}/usr/share/icons/hicolor/128x128/apps/cisco-anyconnect.png"

    # no, Cisco, you don't get to have your own menu category
    echo "Categories=Network" >> cisco-anyconnect.desktop
    install -Dm644 cisco-anyconnect.desktop "${pkgdir}/usr/share/applications/cisco-anyconnect.desktop"

    # install license
    for license in "license.txt" "OpenSource.html"; do
        install -Dm644 ${license} "${pkgdir}/usr/share/licenses/${pkgname}/${license}"
    done

    # install systemd unit for vpnagentd
    install -Dm644 "${srcdir}/vpnagentd.service" "${pkgdir}/usr/lib/systemd/system/vpnagentd.service"

    # install profile files - this makes sure we have all the tools in $PATH
    for profile in "anyconnect.sh" "anyconnect.csh"; do
        install -Dm644 "${srcdir}/${profile}" "${pkgdir}/etc/profile.d/${profile}"
    done

    # install CA certificates
    # Cisco ships their own copy of the VeriSign root, but we already have that in the system store
    # so don't install that and just symlink our system bundle
    mkdir -p "${pkgdir}/opt/.cisco/certificates/ca"
    ln -s /etc/ca-certificates/extracted/tls-ca-bundle.pem "${pkgdir}/opt/.cisco/certificates/ca/system-ca.pem"

    # install custom policy to disable auto updates
    # AnyConnect will attempt to update itself as root, and then run all over both itself and our packaging
    # so prevent it from doing anything like that
    #
    # this may break some really quirky setups that require downloading files from the server,
    # but there's no other way around it that I could find
    install -Dm644 "${srcdir}/AnyConnectLocalPolicy.xml" "${pkgdir}/opt/cisco/anyconnect/AnyConnectLocalPolicy.xml"
}
