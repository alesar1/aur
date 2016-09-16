# Maintainer: Dennis Stengele <dennis@stengele.me>
# Contributor: rob2uk <rob22uk at gmail dot com>
# Contributor: Vlad <vlad@archlinux.net>
# Contributor: Sebastien Bariteau <numkem@gmail.com>

pkgname=atlassian-jira
pkgver=7.2.1
pkgrel=1
pkgdesc="Bug tracking, issue tracking and project management software"
url="https://www.atlassian.com/software/jira"
license=('custom')
arch=('any')
depends=('java-environment=8')
optdepends=('mysql-connector-java: connect to MySQL')
backup=('etc/conf.d/jira'
        'etc/webapps/atlassian-jira/server.xml')
install='jira.install'
source=("https://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-core-${pkgver}.tar.gz"
        'jira.conf.d'
        'jira.service')
sha256sums=('5ee23a97049080e1379a038635d719f0c694de6fa35aa945d87783f683ba9a6d'
            'a6304ba13a8ab1e27761bd3be71d05d2c2e3d61ea308316f4a04723ea4b30fc1'
            '8537696c3b24a3ff6e91a39796f04d505dbbe5723e7985592ff7bb0196761c80')

package() {
    mkdir -p "$pkgdir/opt/atlassian-jira/"
    cp -r "$srcdir/atlassian-jira-core-$pkgver-standalone/"* "$pkgdir/opt/atlassian-jira/"

    # Copy License
    mkdir -p "${pkgdir}/usr/share/licenses/atlassian-jira"
    cp "${pkgdir}/opt/atlassian-jira/licenses/com.atlassian.ip--atlassian-ip--3.0.txt" "${pkgdir}/usr/share/licenses/atlassian-jira/LICENSE"

    # remove unneeded files
    find "$pkgdir/opt/atlassian-jira/bin" -name '*.bat' -type f -exec rm "{}" \;
    find "$pkgdir/opt/atlassian-jira/bin" -name '*.exe' -type f -exec rm "{}" \;
    find "$pkgdir/opt/atlassian-jira/bin" -name '*.dll' -type f -exec rm "{}" \;
    find "$pkgdir/opt/atlassian-jira/bin" -name '*.x64' -type f -exec rm "{}" \;
    find "$pkgdir/opt/atlassian-jira/bin" -name '*.sh' -type f -exec rm "{}" \;
    find "$pkgdir/opt/atlassian-jira/bin" -name '*.command' -type f -exec rm "{}" \;

    # Set home dir
    echo "jira.home=/var/opt/atlassian-jira" > "$pkgdir/opt/atlassian-jira/atlassian-jira/WEB-INF/classes/jira-application.properties"

    # Move server.xml to /etc and create symlink
    mkdir -p "${pkgdir}/etc/webapps/atlassian-jira"
    mv "${pkgdir}/opt/atlassian-jira/conf/server.xml" "${pkgdir}/etc/webapps/atlassian-jira/server.xml"
    ln -s "/etc/webapps/atlassian-jira/server.xml" "${pkgdir}/opt/atlassian-jira/conf/server.xml"

    # Create home directory
    install -dm755 "$pkgdir/var/opt/atlassian-jira"

    # Install systemd unit
    install -Dm644 "$srcdir/jira.service" "$pkgdir/usr/lib/systemd/system/jira.service"
    install -Dm644 "$srcdir/jira.conf.d" "$pkgdir/etc/conf.d/jira"
}
