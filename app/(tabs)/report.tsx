import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Colors, Spacing, FontSize, BorderRadius } from '../../src/constants/theme';

export default function ReportScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>건강 리포트</Text>
        <Text style={styles.subtitle}>AI가 분석한 나의 영양 상태</Text>

        {/* 주간 요약 카드 */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>이번 주 요약</Text>
          <View style={styles.scoreRow}>
            <View style={styles.scoreCircle}>
              <Text style={styles.scoreValue}>--</Text>
              <Text style={styles.scoreLabel}>건강 점수</Text>
            </View>
            <View style={styles.scoreDetails}>
              <ScoreItem label="영양 균형" value="--" />
              <ScoreItem label="수분 섭취" value="--" />
              <ScoreItem label="영양제 복용" value="--" />
            </View>
          </View>
        </View>

        {/* 영양소 상세 */}
        <Text style={styles.sectionTitle}>영양소 분석</Text>
        <View style={styles.card}>
          <NutrientBar label="비타민 D" current={0} goal={100} />
          <NutrientBar label="오메가-3" current={0} goal={100} />
          <NutrientBar label="마그네슘" current={0} goal={100} />
          <NutrientBar label="아연" current={0} goal={100} />
          <NutrientBar label="철분" current={0} goal={100} />
        </View>

        {/* 소변 검사 결과 */}
        <Text style={styles.sectionTitle}>소변 검사 결과</Text>
        <View style={styles.card}>
          <Feather name="droplet" size={20} color={Colors.textTertiary} style={{ alignSelf: 'center', marginBottom: Spacing.sm }} />
          <Text style={styles.emptyText}>
            아직 소변 검사 기록이 없어요.{'\n'}
            소변 스틱으로 검사하고 결과를 기록해보세요.
          </Text>
        </View>

        {/* AI 추천 */}
        <Text style={styles.sectionTitle}>AI 맞춤 추천</Text>
        <View style={[styles.card, styles.aiCard]}>
          <Feather name="cpu" size={28} color={Colors.textTertiary} />
          <Text style={styles.aiText}>
            데이터가 쌓이면 AI가 맞춤 영양제와{'\n'}
            식습관을 추천해드려요.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ScoreItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.scoreItem}>
      <Text style={styles.scoreItemLabel}>{label}</Text>
      <Text style={styles.scoreItemValue}>{value}</Text>
    </View>
  );
}

function NutrientBar({ label, current, goal }: {
  label: string; current: number; goal: number;
}) {
  const percent = goal > 0 ? Math.min((current / goal) * 100, 100) : 0;
  return (
    <View style={styles.nutrientRow}>
      <Text style={styles.nutrientLabel}>{label}</Text>
      <View style={styles.barContainer}>
        <View style={[styles.barFill, { width: `${percent}%` }]} />
      </View>
      <Text style={styles.nutrientPercent}>{current > 0 ? `${Math.round(percent)}%` : '--'}</Text>
    </View>
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
  subtitle: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xs,
  },
  summaryCard: {
    backgroundColor: Colors.text,
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
  },
  summaryTitle: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: Spacing.md,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
  },
  scoreCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreValue: {
    fontSize: FontSize.xxl,
    fontWeight: '700',
    color: Colors.textLight,
  },
  scoreLabel: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.5)',
  },
  scoreDetails: {
    flex: 1,
    gap: Spacing.sm,
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreItemLabel: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.6)',
  },
  scoreItemValue: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.textLight,
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
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  nutrientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
    gap: Spacing.sm,
  },
  nutrientLabel: {
    width: 70,
    fontSize: FontSize.sm,
    color: Colors.text,
  },
  barContainer: {
    flex: 1,
    height: 6,
    backgroundColor: Colors.surfaceSecondary,
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: Colors.text,
    borderRadius: BorderRadius.full,
  },
  nutrientPercent: {
    width: 35,
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    textAlign: 'right',
  },
  emptyText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  aiCard: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
    gap: Spacing.sm,
  },
  aiText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
});
