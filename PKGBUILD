pkgname=1password-beta

_tarver=8.6.0-26.BETA
_tar="1password-${_tarver}.x64.tar.gz"
pkgver=${_tarver//-/_}
pkgrel=26
conflicts=('1password' '1password-beta-bin')
pkgdesc="Password manager and secure wallet"
arch=('x86_64')
url='https://1password.com'
license=('LicenseRef-1Password-Proprietary')
options=(!strip)
install="1password.install"
source=(https://downloads.1password.com/linux/tar/beta/${CARCH}/${_tar}{,.sig})
sha256sums=('04e48e076d353e3665e4fafac1d5870fd85ff614ecda3c55969591697336b8f3'
            '294efe2c0b336d14fea9d548bd80028b235289cac952a8df7df8ebbc3a6a0284'
)
validpgpkeys=('3FEF9748469ADBE15DA7CA80AC2D62742012EA22')

package() {
    depends=('hicolor-icon-theme' 'libgtk-3.so=0' 'nss')

    # Go to source directory
    cd "1password-${_tarver}.x64"

    # Install icons
    resolutions=(32x32 64x64 256x256 512x512)
    for resolution in "${resolutions[@]}"
    do
        install -Dm0644 "resources/icons/hicolor/${resolution}/apps/1password.png" \
            "${pkgdir}/usr/share/icons/hicolor/${resolution}/apps/1password.png"
    done
    # Install desktop file
    install -Dm0644 resources/1password.desktop -t "${pkgdir}"/usr/share/applications/

    # Fill in policy kit file with a list of (the first 10) human users of the system.
    export POLICY_OWNERS
    POLICY_OWNERS="$(cut -d: -f1,3 /etc/passwd | grep -E ':[0-9]{4}$' | cut -d: -f1 | head -n 10 | sed 's/^/unix-user:/' | tr '\n' ' ')"
    eval "cat <<EOF
$(cat ./com.1password.1Password.policy.tpl)
EOF" > ./com.1password.1Password.policy

    # Install system unlock PolKit policy file
    install -Dm0644 com.1password.1Password.policy -t "${pkgdir}"/usr/share/polkit-1/actions/

    # Install examples
    install -Dm0644 resources/custom_allowed_browsers -t "${pkgdir}"/usr/share/doc/1password/examples/

    # Move package contents to /opt/1Password
    cd "${srcdir}"
    install -dm0755 "${pkgdir}"/opt
    mv "1password-${_tarver}.x64" "${pkgdir}/opt/1Password"

    # Cleanup un-needed files
    rm "${pkgdir}"/opt/1Password/com.1password.1Password.policy "${pkgdir}"/opt/1Password/com.1password.1Password.policy.tpl "${pkgdir}"/opt/1Password/install_biometrics_policy.sh
    rm -r "${pkgdir}"/opt/1Password/resources/icons/
    rm "${pkgdir}"/opt/1Password/resources/1password.desktop "${pkgdir}"/opt/1Password/resources/custom_allowed_browsers

    # Symlink /usr/bin executable to opt
    install -dm0755 "${pkgdir}"/usr/bin
    ln -s /opt/1Password/1password "${pkgdir}"/usr/bin/1password
}
