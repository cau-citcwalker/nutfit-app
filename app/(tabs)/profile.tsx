import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Colors, Spacing, FontSize, BorderRadius } from '../../src/constants/theme';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>프로필</Text>

        {/* 프로필 카드 */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Feather name="user" size={32} color={Colors.icon} />
          </View>
          <Text style={styles.name}>사용자</Text>
          <Text style={styles.plan}>Free 플랜</Text>
          <Pressable style={styles.upgradeButton}>
            <Text style={styles.upgradeText}>PRO 업그레이드 · ₩39,000/월</Text>
          </Pressable>
        </View>

        {/* 건강 정보 */}
        <Text style={styles.sectionTitle}>건강 정보</Text>
        <View style={styles.card}>
          <InfoRow label="나이" value="설정 필요" />
          <InfoRow label="성별" value="설정 필요" />
          <InfoRow label="키" value="설정 필요" />
          <InfoRow label="몸무게" value="설정 필요" />
          <InfoRow label="운동 빈도" value="설정 필요" />
          <InfoRow label="건강 목표" value="설정 필요" last />
        </View>

        {/* 연동 서비스 */}
        <Text style={styles.sectionTitle}>연동 서비스</Text>
        <View style={styles.card}>
          <ConnectionRow label="삼성 헬스" icon="watch" connected={false} />
          <ConnectionRow label="Apple 건강" icon="activity" connected={false} />
          <ConnectionRow label="소변 스틱" icon="droplet" connected={false} last />
        </View>

        {/* 구독 관리 */}
        <Text style={styles.sectionTitle}>구독 & 배송</Text>
        <View style={styles.card}>
          <MenuItem label="맞춤 영양제 구독" icon="package" />
          <MenuItem label="배송 주소 관리" icon="map-pin" />
          <MenuItem label="편의점 수령 설정" icon="shopping-bag" />
          <MenuItem label="결제 수단" icon="credit-card" last />
        </View>

        {/* 설정 */}
        <Text style={styles.sectionTitle}>설정</Text>
        <View style={[styles.card, { marginBottom: Spacing.xxl }]}>
          <MenuItem label="알림 설정" icon="bell" />
          <MenuItem label="개인정보 처리방침" icon="shield" />
          <MenuItem label="이용약관" icon="file-text" />
          <MenuItem label="버전 1.0.0" icon="info" last />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <View style={[styles.infoRow, !last && styles.divider]}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

function ConnectionRow({ label, icon, connected, last }: {
  label: string; icon: keyof typeof Feather.glyphMap; connected: boolean; last?: boolean;
}) {
  return (
    <View style={[styles.infoRow, !last && styles.divider]}>
      <View style={styles.rowLeft}>
        <Feather name={icon} size={18} color={Colors.icon} />
        <Text style={styles.infoLabel}>{label}</Text>
      </View>
      <Pressable style={[styles.connectButton, connected && styles.connectedButton]}>
        <Text style={[styles.connectText, connected && styles.connectedText]}>
          {connected ? '연동됨' : '연동하기'}
        </Text>
      </Pressable>
    </View>
  );
}

function MenuItem({ label, icon, last }: {
  label: string; icon: keyof typeof Feather.glyphMap; last?: boolean;
}) {
  return (
    <Pressable style={[styles.menuItem, !last && styles.divider]}>
      <View style={styles.rowLeft}>
        <Feather name={icon} size={18} color={Colors.icon} />
        <Text style={styles.infoLabel}>{label}</Text>
      </View>
      <Feather name="chevron-right" size={18} color={Colors.textTertiary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.text,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    letterSpacing: -0.5,
  },
  profileCard: {
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.surfaceSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.text,
    marginTop: Spacing.sm,
  },
  plan: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  upgradeButton: {
    backgroundColor: Colors.text,
    paddingHorizontal: Spacing.lg,
    paddingVertical: 10,
    borderRadius: BorderRadius.full,
    marginTop: Spacing.md,
  },
  upgradeText: {
    color: Colors.textLight,
    fontWeight: '600',
    fontSize: FontSize.sm,
  },
  sectionTitle: {
    fontSize: FontSize.md,
    fontWeight: '700',
    color: Colors.text,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
    letterSpacing: -0.3,
  },
  card: {
    backgroundColor: Colors.surface,
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 14,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  infoLabel: {
    fontSize: FontSize.sm,
    color: Colors.text,
  },
  infoValue: {
    fontSize: FontSize.sm,
    color: Colors.textTertiary,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  connectButton: {
    backgroundColor: Colors.surfaceSecondary,
    paddingHorizontal: Spacing.md,
    paddingVertical: 5,
    borderRadius: BorderRadius.full,
  },
  connectedButton: {
    backgroundColor: Colors.text,
  },
  connectText: {
    fontSize: FontSize.xs,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  connectedText: {
    color: Colors.textLight,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 14,
  },
});
